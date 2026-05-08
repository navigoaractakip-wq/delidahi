import { Router, type IRouter } from "express";
import { clerkClient } from "@clerk/express";
import { createHash, randomInt, timingSafeEqual } from "node:crypto";
import { eq } from "drizzle-orm";
import { db, passwordResetCodesTable } from "@workspace/db";
import healthRouter from "./health";
import { sendPasswordResetEmail } from "../lib/mailer";

const router: IRouter = Router();

const RESET_CODE_TTL_MS = 15 * 60 * 1000;
const MAX_RESET_ATTEMPTS = 5;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function hashCode(code: string): string {
  return createHash("sha256").update(code).digest("hex");
}

function safeEqualHex(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  try {
    return timingSafeEqual(Buffer.from(a, "hex"), Buffer.from(b, "hex"));
  } catch {
    return false;
  }
}

router.use(healthRouter);

router.post("/debug/redirect-url", (req, res) => {
  const { redirectUrl, platform, env } = req.body || {};
  console.log(`[Debug] Mobile redirect URL: ${redirectUrl} | platform: ${platform} | env: ${env}`);
  res.json({ ok: true });
});

router.post("/debug/log", (req, res) => {
  const { tag, payload } = req.body || {};
  console.log(`[Debug:${tag || "app"}]`, JSON.stringify(payload));
  res.json({ ok: true });
});

router.post("/auth/signup", async (req, res) => {
  const { email, password } = req.body || {};
  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    !email.includes("@") ||
    password.length < 8
  ) {
    return res.status(400).json({ error: "invalid_input" });
  }
  if (!process.env.CLERK_SECRET_KEY) {
    return res.status(500).json({ error: "server_misconfigured" });
  }
  try {
    const user = await clerkClient.users.createUser({
      emailAddress: [email.trim().toLowerCase()],
      password,
      skipPasswordChecks: false,
    });
    const ticket = await clerkClient.signInTokens.createSignInToken({
      userId: user.id,
      expiresInSeconds: 60 * 5,
    });
    console.log(`[Auth] Created user ${user.id} via server signup`);
    return res.json({ ticket: ticket.token });
  } catch (err: any) {
    const errors = err?.errors || err?.clerkError?.errors;
    const code = errors?.[0]?.code;
    const message = errors?.[0]?.message || err?.message || "signup_failed";
    console.error(
      `[Auth] Server signup failed: code=${code} message=${message}`,
      JSON.stringify(errors || err),
    );
    let userMessage = message;
    if (code === "form_identifier_exists") {
      userMessage = "Bu e-posta zaten kayıtlı.";
    } else if (code === "form_password_pwned") {
      userMessage = "Bu şifre güvenli değil, başka bir şifre seçin.";
    } else if (code === "form_password_length_too_short") {
      userMessage = "Şifre çok kısa.";
    } else if (code === "form_param_format_invalid") {
      userMessage = "E-posta formatı geçersiz.";
    }
    return res.status(400).json({ error: code || "signup_failed", message: userMessage });
  }
});

router.post("/auth/forgot-password", async (req, res) => {
  const { email } = req.body || {};
  if (typeof email !== "string") {
    return res.status(400).json({ error: "invalid_input" });
  }
  const normalized = email.trim().toLowerCase();
  if (!EMAIL_REGEX.test(normalized) || normalized.length > 254) {
    return res.status(400).json({ error: "invalid_input", message: "Geçersiz e-posta." });
  }
  // Always return success-like response to avoid leaking user existence
  try {
    const users = await clerkClient.users.getUserList({
      emailAddress: [normalized],
      limit: 1,
    });
    const userExists = users.totalCount > 0;
    if (userExists) {
      const code = String(randomInt(0, 1_000_000)).padStart(6, "0");
      const codeHash = hashCode(code);
      const expiresAt = new Date(Date.now() + RESET_CODE_TTL_MS);
      await db
        .insert(passwordResetCodesTable)
        .values({ email: normalized, codeHash, expiresAt, attempts: 0 })
        .onConflictDoUpdate({
          target: passwordResetCodesTable.email,
          set: { codeHash, expiresAt, attempts: 0, createdAt: new Date() },
        });
      try {
        await sendPasswordResetEmail(normalized, code);
        console.log(`[Auth] Sent reset code to ${normalized}`);
      } catch (mailErr: any) {
        console.error(`[Auth] Failed to send reset mail to ${normalized}:`, mailErr?.message || mailErr);
        return res.status(500).json({ error: "mail_send_failed", message: "Mail gönderilemedi, biraz sonra tekrar deneyin." });
      }
    } else {
      console.log(`[Auth] Reset requested for non-existent email ${normalized}`);
    }
    return res.json({ ok: true });
  } catch (err: any) {
    console.error(`[Auth] forgot-password error:`, err?.message || err);
    return res.status(500).json({ error: "internal", message: "Beklenmeyen bir hata oluştu." });
  }
});

router.post("/auth/reset-password", async (req, res) => {
  const { email, code, newPassword } = req.body || {};
  if (
    typeof email !== "string" ||
    typeof code !== "string" ||
    typeof newPassword !== "string" ||
    !/^\d{6}$/.test(code.trim()) ||
    newPassword.length < 8
  ) {
    return res.status(400).json({ error: "invalid_input", message: "Geçersiz giriş." });
  }
  const normalized = email.trim().toLowerCase();
  if (!EMAIL_REGEX.test(normalized) || normalized.length > 254) {
    return res.status(400).json({ error: "invalid_input", message: "Geçersiz e-posta." });
  }
  try {
    const rows = await db
      .select()
      .from(passwordResetCodesTable)
      .where(eq(passwordResetCodesTable.email, normalized))
      .limit(1);
    const record = rows[0];
    if (!record) {
      return res.status(400).json({ error: "invalid_code", message: "Kod hatalı veya süresi dolmuş." });
    }
    if (record.expiresAt.getTime() < Date.now()) {
      await db.delete(passwordResetCodesTable).where(eq(passwordResetCodesTable.email, normalized));
      return res.status(400).json({ error: "code_expired", message: "Kod süresi dolmuş, yeniden talep edin." });
    }
    if (record.attempts >= MAX_RESET_ATTEMPTS) {
      await db.delete(passwordResetCodesTable).where(eq(passwordResetCodesTable.email, normalized));
      return res.status(429).json({ error: "too_many_attempts", message: "Çok fazla deneme. Yeni kod isteyin." });
    }
    const submittedHash = hashCode(code.trim());
    if (!safeEqualHex(submittedHash, record.codeHash)) {
      await db
        .update(passwordResetCodesTable)
        .set({ attempts: record.attempts + 1 })
        .where(eq(passwordResetCodesTable.email, normalized));
      return res.status(400).json({ error: "invalid_code", message: "Kod hatalı." });
    }
    // Code valid → update password via Clerk
    const users = await clerkClient.users.getUserList({
      emailAddress: [normalized],
      limit: 1,
    });
    const user = users.data[0];
    if (!user) {
      return res.status(400).json({ error: "user_not_found", message: "Hesap bulunamadı." });
    }
    try {
      await clerkClient.users.updateUser(user.id, { password: newPassword });
    } catch (err: any) {
      const errors = err?.errors || err?.clerkError?.errors;
      const code = errors?.[0]?.code;
      const msg = errors?.[0]?.longMessage || errors?.[0]?.message || "Şifre güncellenemedi.";
      console.error(`[Auth] reset password update error: ${code} ${msg}`);
      let userMessage = msg;
      if (code === "form_password_pwned") userMessage = "Bu şifre güvenli değil, başka bir şifre seçin.";
      else if (code === "form_password_length_too_short") userMessage = "Şifre çok kısa.";
      return res.status(400).json({ error: code || "update_failed", message: userMessage });
    }
    // Delete the code so it can't be reused
    await db.delete(passwordResetCodesTable).where(eq(passwordResetCodesTable.email, normalized));
    // Issue a sign-in token so user is logged in immediately
    const ticket = await clerkClient.signInTokens.createSignInToken({
      userId: user.id,
      expiresInSeconds: 60 * 5,
    });
    console.log(`[Auth] Reset password successful for ${normalized}`);
    return res.json({ ok: true, ticket: ticket.token });
  } catch (err: any) {
    console.error(`[Auth] reset-password error:`, err?.message || err);
    return res.status(500).json({ error: "internal", message: "Beklenmeyen bir hata oluştu." });
  }
});

export default router;

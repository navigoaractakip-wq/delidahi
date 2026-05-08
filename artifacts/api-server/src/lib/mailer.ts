import nodemailer, { type Transporter } from "nodemailer";

let cachedTransporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (cachedTransporter) return cachedTransporter;
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    throw new Error("GMAIL_USER ve GMAIL_APP_PASSWORD ayarlanmamış");
  }
  cachedTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass: pass.replace(/\s+/g, ""),
    },
  });
  return cachedTransporter;
}

export async function sendPasswordResetEmail(to: string, code: string): Promise<void> {
  const transporter = getTransporter();
  const fromAddress = process.env.GMAIL_USER!;
  await transporter.sendMail({
    from: `"Deli Dahi" <${fromAddress}>`,
    to,
    subject: "Deli Dahi · Şifre Sıfırlama Kodun",
    text: `Şifre sıfırlama kodun: ${code}\n\nBu kod 15 dakika geçerlidir. Eğer bu isteği siz yapmadıysanız bu maili görmezden gelin.\n\n— Deli Dahi`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 24px; background: #0f0f1e; color: #ffffff; border-radius: 16px;">
        <div style="text-align: center; padding: 16px 0;">
          <h1 style="color: #6c63ff; margin: 0; font-size: 28px;">Deli Dahi</h1>
          <p style="color: #8b8bcc; margin: 8px 0 0; font-size: 14px;">Şifre Sıfırlama</p>
        </div>
        <div style="background: #1a1a2e; border: 1px solid #2a2a4e; border-radius: 12px; padding: 24px; margin: 16px 0;">
          <p style="color: #ffffff; margin: 0 0 12px; font-size: 15px;">Merhaba,</p>
          <p style="color: #8b8bcc; margin: 0 0 20px; font-size: 14px; line-height: 1.6;">
            Şifreni sıfırlamak için aşağıdaki 6 haneli kodu uygulamaya gir:
          </p>
          <div style="background: #0f0f1e; border: 2px dashed #6c63ff; border-radius: 12px; padding: 20px; text-align: center; margin: 20px 0;">
            <span style="font-size: 32px; font-weight: 700; letter-spacing: 8px; color: #6c63ff; font-family: 'Courier New', monospace;">${code}</span>
          </div>
          <p style="color: #8b8bcc; margin: 20px 0 0; font-size: 12px; line-height: 1.5;">
            Bu kod <strong style="color: #ffffff;">15 dakika</strong> geçerlidir. Eğer bu isteği siz yapmadıysanız bu maili görmezden gelebilirsiniz.
          </p>
        </div>
        <div style="text-align: center; padding: 16px 0; color: #4a4a7a; font-size: 11px;">
          © Deli Dahi · Bilgi Yarışması
        </div>
      </div>
    `,
  });
}

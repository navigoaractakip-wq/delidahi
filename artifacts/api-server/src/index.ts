import { createServer } from "http";
import { Server as SocketIOServer } from "socket.io";
import app from "./app";
import { logger } from "./lib/logger";
import { registerDuelHandlers } from "./duel/duelHandler";

async function registerClerkRedirectUrls() {
  const secretKey = process.env.CLERK_SECRET_KEY;
  if (!secretKey) return;

  const urlsToAdd = [
    "quiz-app://",
    "quiz-app://oauth-callback",
    "exp://localhost:8081",
    "exp://localhost:19000",
    "exp://localhost:19006",
  ];

  const domain =
    process.env.REPLIT_INTERNAL_APP_DOMAIN ||
    process.env.REPLIT_DEV_DOMAIN;
  if (domain) {
    const cleanDomain = domain.replace(/^https?:\/\//, "");
    urlsToAdd.push(
      `exp://${cleanDomain}`,
      `exp://${cleanDomain}/--/oauth-callback`,
      `exp://${cleanDomain}/quiz-app/--/oauth-callback`,
    );
  }

  const expoDomain = process.env.REPLIT_EXPO_DEV_DOMAIN;
  if (expoDomain) {
    const cleanExpoDomain = expoDomain.replace(/^https?:\/\//, "");
    urlsToAdd.push(
      `exp://${cleanExpoDomain}`,
      `exp://${cleanExpoDomain}/--/oauth-callback`,
      `exp://${cleanExpoDomain}/quiz-app/--/oauth-callback`,
    );
  }

  for (const url of urlsToAdd) {
    try {
      const res = await fetch("https://api.clerk.com/v1/redirect_urls", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      if (res.ok) {
        logger.info({ url }, "Clerk redirect URL registered");
      } else {
        const body = await res.json().catch(() => ({}));
        if (res.status === 422) {
          logger.info({ url }, "Clerk redirect URL already exists");
        } else {
          logger.warn({ url, status: res.status, body }, "Clerk redirect URL error");
        }
      }
    } catch (err) {
      logger.warn({ err, url }, "Failed to register Clerk redirect URL");
    }
  }
}

const rawPort = process.env["PORT"];

if (!rawPort) {
  throw new Error("PORT environment variable is required but was not provided.");
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const httpServer = createServer(app);

const io = new SocketIOServer(httpServer, {
  cors: { origin: "*", methods: ["GET", "POST"] },
  transports: ["polling", "websocket"],
  path: "/api/socket.io",
});

io.on("connection", (socket) => {
  const clientIp = socket.handshake.headers["x-forwarded-for"] || socket.handshake.address;
  logger.info({ socketId: socket.id, ip: clientIp, transport: socket.conn.transport.name }, "[Socket.io] Client connected");
  socket.on("disconnect", (reason) => {
    logger.info({ socketId: socket.id, reason }, "[Socket.io] Client disconnected");
  });
  registerDuelHandlers(io, socket);
});

httpServer.listen(port, () => {
  logger.info({ port }, "Server listening");
  registerClerkRedirectUrls().catch((e) =>
    logger.warn({ err: e }, "Clerk redirect URL registration failed"),
  );
});

/**
 * Standalone production server for Expo static builds.
 *
 * Serves the output of build.js (static-build/) with two special routes:
 * - GET / or /manifest with expo-platform header → platform manifest JSON
 * - GET / without expo-platform → landing page HTML
 * Everything else falls through to static file serving from ./static-build/.
 *
 * Zero external dependencies — uses only Node.js built-ins (http, fs, path).
 */

const http = require("http");
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const STATIC_ROOT = path.resolve(__dirname, "..", "static-build");
const TEMPLATE_PATH = path.resolve(__dirname, "templates", "landing-page.html");
const basePath = (process.env.BASE_PATH || "/").replace(/\/+$/, "");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".map": "application/json",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".ogg": "audio/ogg",
  ".m4a": "audio/mp4",
  ".aac": "audio/aac",
};

function getAppName() {
  try {
    const appJsonPath = path.resolve(__dirname, "..", "app.json");
    const appJson = JSON.parse(fs.readFileSync(appJsonPath, "utf-8"));
    return appJson.expo?.name || "App Landing Page";
  } catch {
    return "App Landing Page";
  }
}

function serveManifest(platform, res) {
  const manifestPath = path.join(STATIC_ROOT, platform, "manifest.json");

  if (!fs.existsSync(manifestPath)) {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(
      JSON.stringify({ error: `Manifest not found for platform: ${platform}` }),
    );
    return;
  }

  const manifest = fs.readFileSync(manifestPath, "utf-8");
  res.writeHead(200, {
    "content-type": "application/json",
    "expo-protocol-version": "1",
    "expo-sfv-version": "0",
  });
  res.end(manifest);
}

function serveLandingPage(req, res, landingPageTemplate, appName) {
  const forwardedProto = req.headers["x-forwarded-proto"];
  const protocol = forwardedProto || "https";
  const host = req.headers["x-forwarded-host"] || req.headers["host"];
  const baseUrl = `${protocol}://${host}`;
  const expsUrl = `${host}`;

  const html = landingPageTemplate
    .replace(/BASE_URL_PLACEHOLDER/g, baseUrl)
    .replace(/EXPS_URL_PLACEHOLDER/g, expsUrl)
    .replace(/APP_NAME_PLACEHOLDER/g, appName);

  res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  res.end(html);
}

const GZIP_TYPES = new Set([
  "application/javascript",
  "application/json",
  "text/html",
  "text/css",
]);

function pipeStream(readStream, writeStream) {
  readStream.on("error", (err) => {
    console.error("Read stream error:", err.message);
    try { writeStream.destroy(); } catch {}
  });
  writeStream.on("close", () => {
    try { readStream.destroy(); } catch {}
  });
  readStream.pipe(writeStream);
}

function serveStaticFile(urlPath, req, res) {
  const safePath = path.normalize(urlPath).replace(/^(\.\.(\/|\\|$))+/, "");
  const filePath = path.join(STATIC_ROOT, safePath);

  if (!filePath.startsWith(STATIC_ROOT)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404);
    res.end("Not Found");
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";
  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const rangeHeader = req.headers["range"];
  const acceptEncoding = req.headers["accept-encoding"] || "";

  const baseContentType = contentType.split(";")[0].trim();
  const canGzip = GZIP_TYPES.has(baseContentType) && acceptEncoding.includes("gzip") && !rangeHeader;

  if (rangeHeader) {
    const parts = rangeHeader.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunkSize = end - start + 1;
    res.writeHead(206, {
      "content-type": contentType,
      "content-range": `bytes ${start}-${end}/${fileSize}`,
      "accept-ranges": "bytes",
      "content-length": chunkSize,
    });
    pipeStream(fs.createReadStream(filePath, { start, end }), res);
  } else if (canGzip) {
    res.writeHead(200, {
      "content-type": contentType,
      "content-encoding": "gzip",
      "accept-ranges": "bytes",
      "vary": "Accept-Encoding",
    });
    const gzip = zlib.createGzip();
    gzip.on("error", (err) => {
      console.error("Gzip error:", err.message);
      try { res.destroy(); } catch {}
    });
    const readStream = fs.createReadStream(filePath);
    readStream.on("error", (err) => {
      console.error("Read stream error:", err.message);
      try { gzip.destroy(); res.destroy(); } catch {}
    });
    res.on("close", () => {
      try { readStream.destroy(); gzip.destroy(); } catch {}
    });
    readStream.pipe(gzip).pipe(res);
  } else {
    res.writeHead(200, {
      "content-type": contentType,
      "content-length": fileSize,
      "accept-ranges": "bytes",
    });
    pipeStream(fs.createReadStream(filePath), res);
  }
}

const landingPageTemplate = fs.readFileSync(TEMPLATE_PATH, "utf-8");
const appName = getAppName();

process.on("uncaughtException", (err) => {
  console.error("Uncaught exception:", err.message);
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled rejection:", reason);
});

const server = http.createServer((req, res) => {
  const start = Date.now();
  const url = new URL(req.url || "/", `http://${req.headers.host}`);
  let pathname = url.pathname;

  res.on("finish", () => {
    console.log(`${req.method} ${pathname} ${res.statusCode} ${Date.now() - start}ms`);
  });

  if (basePath && pathname.startsWith(basePath)) {
    pathname = pathname.slice(basePath.length) || "/";
  }

  const platformFromPath =
    pathname === "/android" ? "android" : pathname === "/ios" ? "ios" : null;
  const platform = req.headers["expo-platform"] || platformFromPath;

  if (pathname === "/" || pathname === "/manifest" || platformFromPath) {
    if (platform === "ios" || platform === "android") {
      return serveManifest(platform, res);
    }

    if (pathname === "/") {
      return serveLandingPage(req, res, landingPageTemplate, appName);
    }
  }

  serveStaticFile(pathname, req, res);
});

server.on("error", (err) => {
  console.error("Server error:", err.message);
});

const port = parseInt(process.env.PORT || "3000", 10);
server.listen(port, "0.0.0.0", () => {
  console.log(`Serving static Expo build on port ${port}`);
});

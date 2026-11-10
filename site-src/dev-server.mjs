/**
 * Local preview only. Serves the site the way Cloudflare Pages pretty URLs do,
 * and accepts POST /api/lead without emailing anyone.
 *
 *   node site-src/dev-server.mjs
 *   FORM_MODE=down node site-src/dev-server.mjs   # pretend the form is not configured
 */
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.env.PORT || 4173);
const mode = process.env.FORM_MODE || "ok";
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

function send(res, status, body, type) {
  res.writeHead(status, {
    "content-type": type || "text/plain; charset=utf-8",
    "cache-control": "no-store"
  });
  res.end(body);
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${port}`);
  if (req.method === "POST" && url.pathname === "/api/lead") {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const raw = Buffer.concat(chunks).toString("utf8");
    console.log("\nLEAD (local preview, not emailed)\n" + raw.slice(0, 2000));
    const asJson = (req.headers.accept || "").includes("application/json") || (req.headers["content-type"] || "").includes("json");
    if (mode === "down") {
      const body = { ok: false, error: "not_configured" };
      return send(res, 503, asJson ? JSON.stringify(body) : "Form is not configured. Call (817) 818-1034.", asJson ? "application/json" : "text/plain; charset=utf-8");
    }
    if (asJson) return send(res, 200, JSON.stringify({ ok: true }), "application/json");
    res.writeHead(303, { location: "/thanks" });
    return res.end();
  }

  let pathname = decodeURIComponent(url.pathname);
  if (pathname.endsWith("/")) pathname += "index.html";
  else if (!path.extname(pathname)) pathname += ".html";
  const file = path.normalize(path.join(root, pathname));
  if (!file.startsWith(root)) return send(res, 403, "Forbidden");
  fs.readFile(file, (err, data) => {
    if (err) {
      const missing = fs.readFileSync(path.join(root, "404.html"));
      return send(res, 404, missing, "text/html; charset=utf-8");
    }
    send(res, 200, data, types[path.extname(file)] || "application/octet-stream");
  });
});

server.listen(port, () => {
  console.log(`Preview at http://localhost:${port} (form mode: ${mode})`);
});

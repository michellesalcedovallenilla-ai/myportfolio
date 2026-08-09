import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..");
const host = "127.0.0.1";
const port = Number.parseInt(process.argv[2] || process.env.PORT || "4173", 10);
const mimeTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".gif", "image/gif"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpeg", "image/jpeg"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".mp3", "audio/mpeg"],
  [".pdf", "application/pdf"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
]);

function send(response, status, body, contentType = "text/plain; charset=utf-8") {
  response.writeHead(status, {
    "Cache-Control": "no-store",
    "Content-Type": contentType,
    "X-Content-Type-Options": "nosniff",
  });
  response.end(body);
}

const server = http.createServer((request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.setHeader("Allow", "GET, HEAD");
    send(response, 405, "Method Not Allowed");
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, `http://${host}`).pathname);
  } catch {
    send(response, 400, "Bad Request");
    return;
  }

  let target = path.resolve(root, `.${pathname}`);
  const insideRoot = target === root || target.startsWith(`${root}${path.sep}`);
  if (!insideRoot) {
    send(response, 403, "Forbidden");
    return;
  }

  try {
    if (fs.statSync(target).isDirectory()) target = path.join(target, "index.html");
  } catch {
    send(response, 404, "Not Found");
    return;
  }

  fs.readFile(target, (error, body) => {
    if (error) {
      send(response, error.code === "ENOENT" ? 404 : 500, "Unable to read file");
      return;
    }
    const contentType = mimeTypes.get(path.extname(target).toLowerCase()) ||
      "application/octet-stream";
    response.writeHead(200, {
      "Cache-Control": "no-store",
      "Content-Length": body.length,
      "Content-Type": contentType,
      "X-Content-Type-Options": "nosniff",
    });
    response.end(request.method === "HEAD" ? undefined : body);
  });
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`Port ${port} is in use. Try: node scripts/serve.mjs ${port + 1}`);
    process.exitCode = 1;
    return;
  }
  throw error;
});

server.listen(port, host, () => {
  console.log(`Serving ${root}`);
  console.log(`Open http://${host}:${port}/`);
});

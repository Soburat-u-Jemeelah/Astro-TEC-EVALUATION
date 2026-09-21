const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const BASE_DIR = __dirname;

const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

const server = http.createServer((req, res) => {
  let reqUrl = decodeURI(req.url.split("?")[0]);
  if (reqUrl === "/") reqUrl = "/index.html";

  const filePath = path.join(BASE_DIR, reqUrl);

  // Security check to prevent directory traversal
  if (!filePath.startsWith(BASE_DIR)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
      return;
    }

    if (stats.isDirectory()) {
      const indexHtml = path.join(filePath, "index.html");
      fs.readFile(indexHtml, (err2, data) => {
        if (err2) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("404 Not Found");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    fs.readFile(filePath, (err2, data) => {
      if (err2) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server Error");
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`\n==============================================`);
  console.log(` ASTROTEC CBT Quiz Server is running!`);
  console.log(` URL: http://localhost:${PORT}`);
  console.log(`==============================================\n`);
});

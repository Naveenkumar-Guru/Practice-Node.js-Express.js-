import http from "http";
import fs from "fs";
import path from "path";

const server = http.createServer((req, resp) => {
  let filePath = "";
  let contentType = "text/html";

  if (req.url === "/" || req.url === "/index") {
    filePath = path.join(process.cwd(), "Web", "data", "Html", "index.html");
  } else if (req.url === "/about") {
    filePath = path.join(process.cwd(), "Web", "data", "Html", "about.html");
  } else if (req.url === "/services") {
    filePath = path.join(process.cwd(), "Web", "data", "Html", "services.html");
  } else if (req.url === "/contact") {
    filePath = path.join(process.cwd(), "Web", "data", "Html", "contact.html");
  } else {
    resp.writeHead(404, { "Content-Type": "text/html" });
    return resp.end("<h1>404 - Page Not Found</h1>");
  }

  fs.readFile(filePath, "utf-8", (error, data) => {
    if (error) {
      resp.writeHead(500, { "Content-Type": "text/plain" });
      return resp.end("Internal Server Error");
    }
    resp.writeHead(200, { "Content-Type": contentType });
    resp.end(data);
  });
});

server.listen(8080, "127.0.0.1", (error) => {
  if (error) throw error;
  console.log("Server is running at http://127.0.0.1:8080");
});


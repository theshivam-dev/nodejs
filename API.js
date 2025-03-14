import http from "http";
import fs from "fs/promises";

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    const data = await fs.readFile("index.html");
    res.end(data);
  } else if (req.url === "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    const data = await fs.readFile("script.json");
    res.end(data);
  } else {
    res.writeHead(404);
    res.end("Page Not Found");
  }
});

server.listen(3000, () => console.log("server started : 3000"));

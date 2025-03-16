import http from "http";
import fs from "fs/promises";

const server = http.createServer(async (req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "content-type": "text/html" });
      const htmlData = await fs.readFile("index.html");
      res.end(htmlData);
      break;

    case "/style.css":
      res.writeHead(200, { "content-type": "text/css" });
      const cssData = await fs.readFile("style.css");
      res.end(cssData);
      break;

    case "/script.js":
      res.writeHead(200, { "content-type": "text/javascript" });
      const scriptData = await fs.readFile("script.js");
      res.end(scriptData);
      break;

    case "/nodeMeme.webp":
      res.writeHead(200, { "content-type": "image/webp" });
      const imgData = await fs.readFile("nodeMeme.webp");
      res.end(imgData);
      break;

    default:
      res.writeHead(404);
      const errorPage = await fs.readFile("404.html");
      res.end(errorPage);
      break;
  }
});

server.listen(3000,() => console.log('ServerStart : 3000')) 

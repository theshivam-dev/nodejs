import http from "http";
import fs from "fs/promises";

const server = http.createServer(async (req, res) => {
try {
  if (req.url === "/") {
    const clientIp = req.socket.remoteAddress;
    res.writeHead(200, { "content-type": "text/html" });
    fs.appendFile("log.txt", `${clientIp} \n`);
    const data = await fs.readFile("index.html");
    res.end(data);
  } 
  
  else if (req.url === "/script.js") {
    const data = await fs.readFile("script.js");
    res.end(data);
  }
  
  else if (req.url === "/nodeMeme.webp") {
    res.writeHead(200, { "Content-Type": "image/webp" });
    const data = await fs.readFile("nodeMeme.webp");
    res.end(data);
  }
  
  else if (req.url === "/style.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    const data = await fs.readFile("style.css");
    res.end(data);
  }
  
  else {
    res.writeHead(404);
    res.end("404 Page Not Found");
  }} 
  
  catch (err) {
    res.writeHead(500)
    res.end('Internal Server Error')
  }
});

server.listen(3000, () => console.log("server start : 3000")); 

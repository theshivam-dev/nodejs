const http = require("http");
const fs = require("fs");
const date = new Date();
const myServer = http.createServer((req, res) => {
  const timestamp = new Date().toISOString();
  const clientIp = req.socket.remoteAddress;
  const log = `${timestamp} - IP: ${clientIp} - Method: ${req.method} - URL: ${req.url} New Req Received \n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        res.end("I am Kevin");
        break;
      default:
        res.end("404 Not Found");
    }
  });
});
myServer.listen(3000, () => {
  console.log("server start : ");
});

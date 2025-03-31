import http from "http";
import fs from "fs";
import zlib from "zlib";

fs.createReadStream("./sample.txt").pipe(
  zlib.createGzip().pipe(fs.createWriteStream("./sample.zip"))
);

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      const stream = fs.createReadStream("./index.html", "utf-8");
      stream.on("data", (chunk) => res.write(chunk));
      stream.on("end", () => res.end());
      break;

    default:
      break;
  }
});

server.listen(3000, () => console.log("server start : 3000"));

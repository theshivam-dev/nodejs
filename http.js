import http from "http";
const API = async () => {
  try {
    const response = await fetch("https://api64.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    return error;
  }
};
const IP = await API();
const server = http.createServer((req, res) => {
  res.end("Your API is " + IP);
});

server.listen(3000, () => console.log("server start : 3000"));

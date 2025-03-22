import https from 'https'
import fs from 'fs/promises'

const sslKeys = async () => {
    const options = {
        key: await fs.readFile("key.pem",'utf-8'),
        cert: await fs.readFile("cert.pem",'utf-8'),
      };
      return options
}
const keys = await sslKeys()
const server = https.createServer(keys,(req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('https node server !')
})

server.listen(3000,()=> console.log('https server start : 3000'))

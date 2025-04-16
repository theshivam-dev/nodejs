import http from 'http'
import { parse } from 'querystring';

const server = http.createServer((req, res) => {
    let data = ''
    req.on('data', (chunk) => {
        data += chunk
        const parsed = parse(data);
        console.log(parsed);
    })

    req.on('end', () => {
        res.end(JSON.stringify({ message: 'sucessfully save in server' }))
    })
})

server.listen(3000, () => console.log('server start : 3000'))


import http from 'http'
import cluster from 'cluster'
import os from 'os'
const totalCpus = os.cpus().length

if (cluster.isPrimary) {
    for (let i = 0; i < totalCpus; i++) {
        cluster.fork()
    }
} else {
    const server = http.createServer((req, res) => {
        res.end('clustering  ' + process.pid)
    })
    server.listen(3000)
}


const http = require('http');
const os = require('os');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    //  CORS headers to allow all origins for simplicity 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'GET' && req.url === '/') {
        // Simulate async operation with random delay
        const delay = Math.random() * 1000;
        setTimeout(() => {
            const cpuInfo = os.cpus()[0]; //  first CPU info
            const osInfo = os.platform(); //  OS platform

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ cpu: cpuInfo.model, os: osInfo }));
        }, delay);
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
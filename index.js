const http = require('http');
const hostname = '127.0.0.1'; // biasa di sebut localhost
const port = 3000; // port website biasanya 80 atau 8080
// utk menghindari bentrok dengan yang sudah memakai port 80;
// maka kita pakai port 3000

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/plain');
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hi i can nodejs');
} );

server.listen(port, hostname, () => {
    console.log(`server is running at ${hostname}:${port}`);
})
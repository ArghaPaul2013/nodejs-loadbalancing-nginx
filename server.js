var http = require('http');

function serve(ip, port) {
  http.createServer(function (req, res) {
    res.end(`<h1>Load balancing using Nginx --> http://${ip}:${port}</h1>`);
}).listen(port, ip);
    console.log(`Server running at --> http://${ip}:${port}`);

}

serve('127.0.0.1', 8090);
serve('127.0.0.1', 8091);
serve('127.0.0.1', 8092);

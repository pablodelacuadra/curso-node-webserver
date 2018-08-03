const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Pablo',
            edad: 23,
            url: req.url
        }
        res.write(JSON.stringify(salida));

        res.end();
    })
    .listen(3000);

console.log('Puerto 3000');
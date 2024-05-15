const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.end('<h1>Hello Node!!!!</h1>\n')
})

server.listen(3000, _ => {
    console.log('Le serveur tourne sur http://localhost:3000/')
})
var http = require('http')
var fs =require('fs')

http.createServer(function (req, resp) {
    console.log("servidor activado");
    resp.writeHead(200, { 'content-type': 'text/plain' })
    
    switch (peticion.url) {
        case "/": plantilla = "inicio.html"    
            break;
        
        case "/nodejs": plantilla = "sobrenode.html"
            break;

        default:
            plantilla = "404.html"
            
            break;
    }

    fs.readFile("./plantillas/" + plantilla, function (error,datos) {
        resp.write()
        resp.end()
        })


}).listen(8080,'localhost')

console.log('el servidor esta en localhost');







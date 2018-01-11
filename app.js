var http = require('http')
var fs = require('fs')
http.createServer(function (peticion, respuesta) {
    respuesta.writeHead(200, {'Content-Type': 'text/html' })
    switch (peticion.url) {
        case '/':
            plantilla = "inicio.html"
            break    
        case '/nodejs':
            plantilla = "sobrenode.html"
            break
    
        default:
            plantilla="404.html"    
            break;
    }
    fs.readFile("./plantilllas/"+plantilla,function (error,datos) {
        respuesta.write(datos)
        respuesta.end()

    })
}).listen(8080, 'localhost')


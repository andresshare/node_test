var fs= require('fs')
var express = require("express")
var app = express()

app.use(express.static(__dirname + '/views'))

//Datos

var camisetasDatos = [
    {
        titulo: "Naranja", imagen: "../images/camiseta_uno.jpg",
        titulo: "Roja", imagen: "../images/camiseta_dos.jpg",
        titulo: "azul", imagen: "../images/camiseta_tres.jpg",
        titulo: "verde", imagen: "../images/camiseta_cuatro.jpg",
     }
 ]



app.get('/', function (peticion, respuesta) {
    respuesta.render('index.jade',
        {
            titulo: "tienda de frutas del json",
            fruta: "guayaba",
            iamgen:"../smile.png"
}    )
})

app.get('/tienda',function (peticion,respuesta) {
    respuesta.render('tienda.jade', {
        titulo: "tienda de Camisetas Json",
        camisetas: camisetasDatos
    })

})

app.get('/tienda/comprar/:camiseta', function (peticion, respuesta) {
   
    var objetos = camisetasDatos.filter(function () {
        if (peticion.params.camiseta==obj.titulo) {
        respuesta.render('compra.jade',obj)
    }        
    })[0]
})

app.use(function (peticion,respuesta) {
    respuesta.status(400)
    respuesta.render('404.jade',{titulo:'404:pagina no encontrada '})
})



app.listen(8080,function () {
    console.log('escuchando en puerto');
    
})
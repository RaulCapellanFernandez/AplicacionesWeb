/*
*Crear un servidor con el modulo HTTP
*/
var http = require('http');//Ejecutar JavaScript de lado del servidor
var {info, error} = require('./modules/my-log');//Comillas simples y dobles para strings
var consts = require('./utils/consts');
var firebase = require('../libs/firebase');

var server = http.createServer(function (request, response){
    if(request.url== "/"){
        response.writeHead(200, {'Content-Type': 'text/html'});//Todo fue correcto
        response.write('<html><body><p>Pagina de inicio</p></body></html>');//HTML de inicio que siempre va a mostrar
        response.end();
    }else if(request.url == "/cartas"){
        response.writeHead(200, {'Content-Type': 'text/html'});//Todo fue correcto
        response.write('<html><body><p>Cartas</p></body></html>');//HTML de inicio que siempre va a mostrar
        response.end();
    }else if(request.url == "/info"){
        var result = info(request.url);
        response.writeHead(200, {'Content-Type': 'text/html'});//Todo fue correcto
        response.write(result);//HTML de inicio que siempre va a mostrar
        response.end();
    }else if(request.url == "/error"){
        var result = error(request.url);
        response.writeHead(200, {'Content-Type': 'text/html'});//Todo fue correcto
        response.write(result);//HTML de inicio que siempre va a mostrar
        response.end();
    
    }else{
        response.writeHead(404, {'Content-Type': 'text/html'});//Todo fue correcto
        response.write('<html><body><p>Not Found</p></body></html>');//HTML de inicio que siempre va a mostrar
        response.end();
    }
});

server.listen(4000);//Puerto en el que escucha el serrvidor
console.log("running on 4000");
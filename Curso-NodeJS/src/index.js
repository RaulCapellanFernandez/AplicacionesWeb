/*
*Crear un servidor con el modulo HTTP
*/
var http = require('http');

var server = http.createServer(function (request, response){
    if(request.url== "/"){
        response.writeHead(200, {'Content-Type': 'text/html'});//Todo fue correcto
        response.write('<html><body><p>Pagina de inicio</p></body></html>');//HTML de inicio que siempre va a mostrar
        response.end();
    }else if(request.url == "/cartas"){
        response.writeHead(200, {'Content-Type': 'text/html'});//Todo fue correcto
        response.write('<html><body><p>Cartas</p></body></html>');//HTML de inicio que siempre va a mostrar
        response.end();
    }else{
        response.writeHead(404, {'Content-Type': 'text/html'});//Todo fue correcto
        response.write('<html><body><p>Not Found</p></body></html>');//HTML de inicio que siempre va a mostrar
        response.end();
    }


    
});

server.listen(4000);//Puerto en el que escucha el serrvidor
console.log("running on 4000");
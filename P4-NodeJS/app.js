var express = require('express');
var app = express();

let listadoUniversidades= require('./listar-Universidades.json');

console.log('Inicio ')

app.get('/', function (req, res) {
  res.send('Hello World!');
});
  
console.log("Despues de /")

app.get('/json', function (req, res) {
    res.json(listadoUniversidades);
  });

app.listen(3000, function () {
  console.log('App iniciada');
}); 

console.log('Fin')
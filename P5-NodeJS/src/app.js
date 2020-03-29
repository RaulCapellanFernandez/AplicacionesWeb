var express = require('express');
var app = express();
var leeFichero = require('./leer-Archivo.js');
var escribirFichero = require('./escribir-Archivo.js');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // body en formato json
app.use(bodyParser.urlencoded({ extended: false }));

let listadoUniversidades= require('./listar-Universidades.json');


app.get('/', function (req, res) {
    res.send('Hello World!');
});
  

//Practica 4
app.get('/json', function (req, res) {
    res.json(listadoUniversidades);
  });

//Parte 1
app.get('/alumno', function (req, res) {
  res.send(leeFichero());
});

//Parte 2
app.post('/alumnos', function (req, res) {
  if(req.body.nombre){
    escribirFichero(req.body.nombre)
    respuesta = {
      mensaje: 'Nombre actualizado',
    };
  }else{
    respuesta = {
      mensaje: 'No se ha introducido ningun nombre, error',
    };
  }
  res.send(respuesta);
});

//Parte 3
app.get('/alumno/3', function (req, res) {
  arrayAlumn = leeFichero();
  if(arrayAlumn[2] == null){
    res.send("Alumno no encontrado");
  }else
    res.send(arrayAlumn[2]);
});

//Parte 4
app.get('/lastAlumno', function (req, res) {
  arrayAlumn = leeFichero();
  for(i in arrayAlumn){
    ultimoAlumn = arrayAlumn[i]; 
  }
  res.send(ultimoAlumn);
});

app.listen(3000, function () {
    console.log('App iniciada');
}); 
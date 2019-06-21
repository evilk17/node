// npm install --save express

var express = require('express');
var app= express();

app.get('/',function (req,res){
  res.send("<h1>Hola Mundo</h1>");

});
app.get('/hola1',function(req,res){ //Con una ruta http://127.0.0.1:8081/hola1 ingresa
  console.log(__dirname);
  res.sendFile(__dirname+"/"+"index.html");
});

app.use(express.static('public'));//Todo lo que se encuentra en la carpeta public es publico para todos

app.get(['/hola','/adios'],function(req,res){ //Con arreglos http://127.0.0.1:8081/adios y http://127.0.0.1:8081/hola ingresa
  console.log(__dirname);
  res.sendFile(__dirname+"/"+"index.html");
});

app.get('/ab*cd',function(req,res){//Con una expresion regular http://127.0.0.1:8081/abiyhfdajpoascd ingresa todo lo que inicie con ab y termine en cd
  res.send("Expresion regular");
});
var servidor = app.listen(8081,function(){
  console.log("Servidor arriba");

});

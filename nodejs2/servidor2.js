var express = require('express');
var app = express();

app.get('/',function(req,res){
res.sendFile(__dirname+"/index.html");

});
app.get('/procGet',function(req,res){
  var respuesta = {
    nombre: req.query.nombre,
    apellido:req.query.apellido
  }

  console.log(respuesta);

  //Convertir a json y mandar a front
  res.end(JSON.stringify(respuesta));


});

//Peticion de tipo POST

var parser = require('body-parser');//Parsear la informacion que llega en post
var encodeparser=parser.urlencoded({extended:false});

app.post('/procPost',encodeparser,function (req,res){
    var respuesta={
      nombre:req.body.nombre,
      apellido:req.body.apellido

    }
    console.log(respuesta);
    res.end(JSON.stringify(respuesta));

});


var servidor = app.listen(8081,function(){
  console.log("Servidor arriba");

});

//npm install --save express
//npm install --save multer
//npm install --save pug
//npm install --save mongoose
//Comando de mongoose
//use nombreBase
//show test


//bruno.tor.96@gmail.com
//Bruno torres




var express = require ('express');
var mongoose= require('mongoose');
var app=express();
var bodyParser=require('body-parser');
var multer= require('multer');
var upload=multer();

//Configuraciones

mongoose.connect('mongodb://localhost/Prueba');
app.set('view engine','pug');
app.set ('views','./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use (upload.array());

//Definir un esquema del tipo de objetos que se van a guardar
var personaSchema = mongoose.Schema({
  nombre:String,
  edad : Number,
  nacionalidad:String
});

var Persona = mongoose.model('Persona',personaSchema);

//Pagina Principal
app.get('/',function(req,res){
  res.render('persona');

});

app.post('/persona',function(req,res){
  var info=req.body;
  if(!info.nombre||!info.edad||!info.nacionalidad){
    res.render('mensaje',{mensaje:"Se ingreso mal la informacion",type:"error"});
  } else{
    var nuevaPersona=new Persona({
      nombre:info.nombre,
      edad:info.edad,
      nacionalidad:info.nacionalidad
    });
    console.log(nuevaPersona);
    //Guardando el objeto
    nuevaPersona.save(function (err,Persona){
      if(err)
        res.render('mensaje',{mensaje:"Errod en la base",type:"error"});
        else
          res.render('mensaje',{mensaje:"Persona registrada",
          type:"succes",
          persona:info
        });

    });


  }

});

app.get('/find',function(req,res){


  Persona.find(function(err,response){
  //Persona.find({nombre:"gerardo"},'nombre nacionalidad',function(err,response){
    console.log(response);
    res.send(response);
  });
});

//Revisar como se realizan los querys
// Busqueda por rango
// $lt -> valores menores a
//$lte -> menor o igual a
//$gt -> valores mayores a
//gte -> valores mayores o iguales a
// edad: {$gte:20 , $lte:25} Mayores o =s a 20 y  menores o =s a 25
app.get('/find2',function(req,res){
//Persona.fineOne({nombre:"gerardo"},'nombre nacionalidad',,function(err,res){
  Persona.findOne(function(err,response){
    console.log(response);
    res.send(response);
  });
});

//Busca por _id
app.get('/find3',function(req,res){
//Persona.fineOne({nombre:"gerardo"},'nombre nacionalidad',,function(err,res){
  Persona.findById("5d0cfd7d5814e948c01b2d7d",function(err,response){
    console.log(response);
    res.send(response);
  });
});

app.get('/update',function(req,res){
  //Persona.findOneAndUpdate(filtros,datos a actualizar , callback);
//Persona.findByIDAndUpdate(id,datos a actualizar, callback);
//Filtra por edad = 3 y actualiza el nombre por iker adrian
  Persona.update({edad:3},{nombre:"Iker Adrian"},function(err,response){
    console.log(response);
    res.send(response);
  });
});

app.get('/delete',function(req,res){

  //Persona.findOneAndRemove(Filtros,callback);
  //Persona.findByIdAndRemove(filtros,callback);
  Persona.remove({edad:34},function(err,response){
    if(err) res.send("No se elimino de la base");
    else res.send("Registro eliminado");
  });
});

/*
Usar mongo en la consola
> use Prueba
switched to db Prueba
> show collections
Test
personas
> db.personas.find()
*/



var servidor = app.listen (8081,function(){
    console.log('Servidor activo ');
});

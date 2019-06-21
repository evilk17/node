var express = require("express");
var app = express();
var fs = require("fs");

var usuario4 ={
  "usuario4":
  {"nombre":"erick",
  "contrasenia":"pollo123",
  "profesion":"nini",
  "id":4
}
}
app.get('/listusers',function(req,res){
  fs.readFile(__dirname+"/usuarios.json","utf8",function(err,data){
console.log(data);
    res.end(data);
  });

});

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index2.html");
});

app.get("/index3",function(req,res){
    res.sendFile(__dirname+"/index3.html");
});




var parser = require('body-parser');//Parsear la informacion que llega en post
var encodeparser=parser.urlencoded({extended:false});

app.post('/addUser',encodeparser,function (req,res){
    fs.readFile(__dirname+"/usuarios.json",'utf8',function(err,data){
      data=JSON.parse(data);
      data["usuario4"]=usuario4["usuario4"];
      var respuesta={
        usuario:{
        nombre:req.body.nombre,
        contrasenia:req.body.password,
        profesion:req.body.profesion,
        id:req.body.id
        }
      }
      data["usuario5"]=respuesta;
      //data ["usuario4"]=usr[4];
      console.log(data);
      res.end(JSON.stringify(data));
    });


});



app.post('/nombres',encodeparser,function (req,res){
    fs.readFile(__dirname+"/usuarios.json",'utf8',function(err,data){
      data=JSON.parse(data);
      var respuesta;
      console.log(data.length);
      for (item in data){
        console.log(item);
        //respuesta[item]=
        {
          nombre:item.nombre
        }
      }

      //data ["usuario4"]=usr[4];
      console.log(respuesta);
      res.end(JSON.stringify(respuesta));
    });


});


var servidor = app.listen(8081,function(){
  console.log("Server on");
});

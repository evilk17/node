//Importamos modulos
var http=require ("http");

//Creamos el servidor

http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end("Hola Mundo\n");



}).listen(8081);

console.log('Servidor corriendo en Http://127.0.0.1:8081/');




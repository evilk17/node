var events = require('events');

var eventEmitter = new events.EventEmitter();

var conHandler=function connected(){
	console.log('conexion Satisfactoria');
	eventEmitter.emit('Datos recibidos');


}


eventEmitter.on('con',conHandler);

eventEmitter.on('datos_recibidos',function(){

	console.log("Datos recibidos correctamente");
});


eventEmitter.emit('con');
eventEmitter.emit('datos_recibidos');

console.log("Programa Finalizado");








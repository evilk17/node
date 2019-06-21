
var events = require('events');
var persona= new events.EventEmitter();
var saludarHandler = function(){
	let regreso=true;
	console.log("Hola Amigo");
	if (regreso){
		persona.emit('charlar');
	}else{
		persona.emit('adios');
	}
}

var charlarHandler=function(){
	console.log("Que paso");
}

var adiosHandler=function(){
	console.log("Tu quien eress?");
}


persona.on('charlar',charlarHandler);
persona.on('adios',adiosHandler);
persona.on('saludar',saludarHandler);

persona.emit('saludar');





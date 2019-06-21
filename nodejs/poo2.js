function Persona(primerNombre){
	this.primerNombre = primerNombre;
}

Persona.prototype.caminar = function(){
	console.log("Estoy caminando : 3");
};


Persona.prototype.saludar = function(){
		console.log("Hola me llamo "+this.primerNombre);
};

function Estudiante(primerNombre,asignatura){
	Persona.call( this , primerNombre );//Hereda de la clase persona y utiliza su constructor con esta instruccion
	this.asignatura=asignatura;
};


Estudiante.prototype=Object.create(Persona.prototype);

Estudiante.prototype.constructor = Estudiante;

Estudiante.prototype.saludo = function(){
	console.log("Hola, me llamo "+ this.primerNombre+ " Estoy estudiando node.js");
};

Estudiante.prototype.despedida = function(){
	console.log("Adios");
};

var Estudiante1 = new Estudiante("Gerardo","Matemáticas");
Estudiante1.saludar();
Estudiante1.saludo();
Estudiante1.caminar();
Estudiante1.despedida();

console.log(Estudiante1 instanceof Persona);
console.log(Estudiante1 instanceof Estudiante);




















var persona = {
	nombre: "Gerardo",
	apellido: "Perez",
	edad:22,
	sumar: function(a,b){
		console.log(a+b);
	},
	arreglo:[1,2,3],
	transporte:{
		tipo: "carro",
		marca:"Ferrari",
		anio: "2020",
		descripcion: " Me lleva y me trae a la escuela",
		ruido:function(){
			console.log("Run run");
		}

	},
	mascotas:[{
		tipo: "perro",
		nombre:"beethoven"
	},{
		tipo:"canario",
		nombre:"Piolin"
	},{
		tipo:"Gato",
		nombre:"Don gato"
	}]


}


console.log("Nombre "+persona.nombre+" "+persona.apellido);


console.log("Nombre mascota "+persona.mascotas[0].tipo+" "+persona.mascotas[0].nombre);

persona.sumar(10,15);


persona.transporte.ruido();

persona.arreglo.forEach(function(){
	
	
	
	
	
	
});












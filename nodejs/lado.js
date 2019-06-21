console.log("Escribe tu nombre");
var stdin=process.openStdin();

/*stdin.addListener("data",function(d){
	console.log("Tu nombre es: "+
		d.toString().trim());
});
*/

stdin.addListener("data",function(d){
	console.log("Factorial de "+d);
	var tmp=1;
	for (i=1;i<=d;i++){
		tmp=tmp*i;
		console.log(tmp);
	}
	var stdin=process.exit();
});


var http = require('http');
var options = {
	host: 'localhost',
	port: '8081',
	path: '/index.html'
};

var callback = function (response){
	var body = '';
	response.on('data',function(data){
		body+=data;
	});

	response.on ('end',function(){
		console.log(body);
	});

};


var peticion = http.request(options,callback);
peticion.end();
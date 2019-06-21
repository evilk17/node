console.log('Factorial');

var tmp=1;

for (let i=1;i<=15;i++){
	tmp=tmp*i;
	console.log(tmp);
}

function fact(n){
	if(n==0){
		return 1;
	}
	else{
		return n*fact(n-1)
	}
}

console.log(fact(5));



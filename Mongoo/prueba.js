
f=function (a,b){
  console.log(b(a));
}


f2= function (a){
  return (a+1);

}
f3=function(a){
  return a*a;
}

f4=function(a,b){
  return a*b;
}


f(5,f2);


map=function (f1,lista){
  for (var i=0;i<lista.length;i++){
    lista[i]=f1(lista[i]);
  }
  return lista;
}

filter = function (fun1,lista){
  var l;
  for(var i=0;i<lista.length;i++){
    if(fun(lista[1],lista[i])){
      l.push(lista[i]);
    }
  }
}



lista=[10,24,12,11,13];
console.log(lista);

lista=map(f2,lista)
console.log(lista);

lista=map(f3,lista)
console.log(lista);

lista=map(f3 (3),lista)
console.log(lista);

console.log(filter(lista))

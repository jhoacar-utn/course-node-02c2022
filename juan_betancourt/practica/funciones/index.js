function suma(a,b){
const juan=  a+b
console.log(juan);
}


suma(80,20);

function mostrame() {
    console.log('un mensaje cualquiera pero que sea el segundo');
}

setTimeout(mostrame,3000)

console.log('que me muestra el primer mensaje');

function mostrandoCallback(a,b,callback) {

    const resultado= callback(a,b)
    console.log(resultado);
    
}

function multiplicacion(a,b) {

   return a*b
    
}

mostrandoCallback(5,8,multiplicacion)
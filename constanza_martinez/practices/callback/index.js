/**
 * una callback es una función que se recibe por parámetro y se invoca adentro de otra función
 */
function mostrar(a,b,callback) {
    
    const resultado = callback(a,b)
    console.log(resultado);
}

function suma (a,b){
    return a+b
}

function multiplicacion (a,b){
    return a*b
}

mostrar(1,2,suma);

mostrar(5,2,multiplicacion);
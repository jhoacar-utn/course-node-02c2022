/**
 * Una callback es una funcion que se recibe por parametro y se invoca adentro de otra funcion
 */
function mostrar(a,b,callback){

    const resultado = callback(a,b)
    console.log(resultado)
}

function suma(a,b){
    return a+b
}

function multiplicacion(a,b){
    return a*b
}

mostrar(1,2,suma)

mostrar(5,4,multiplicacion)
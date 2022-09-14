/**
 *  una callback es una funcion que se resibe por parametro y se invoca dentro de otra funcion
 * 
 */
function mostrar (a,b,callback){
    const resultado = callback(a,b)
    console.log()
}

function suma(a,b){
    return a+b 
}

function multiplicacion (a,b){
    return a*b
}

mostrar(1,2, suma)
mostrar (5,4, multiplicacion)
/**
 * Una callback es una funcion que se recibe por parametro y se invoca dentro de otra funcion
 * La funcion mostrar recibe los primeros dos parametros y se los pasa a la funcion que se pase
 * por tercer parametro
 * La funcion callback del tercer parametro recibe tambien un string con informacion en el tercer parmaetro
 */

function mostrar(a, b, callback){

    const resultado = callback(a, b, "Se esta llamando la funcion mostrar");
    console.log(resultado);
}

function suma(a, b){
    return a + b;
}

function multiplicacion(a, b){
    return a * b;
}

mostrar(1, 2, suma);
mostrar(5, 4, multiplicacion);
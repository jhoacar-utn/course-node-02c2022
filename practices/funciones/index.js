/*
    ()=>{} -> Es una funcion anonima
*/
/*
    function nombre(){} -> Es una funcion con entorno
*/

/** 
 * Una funcion es una forma de declarar codigo en bloques
 * - Una funcion puede recibir datos de entrada que son conocido como parametros
 * - Una funcion puede devolver datos de salida que son conocido como resultado
 */
const suma = function(a,b){
    return a+b;
}

console.log(suma(1,2))
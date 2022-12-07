/*
    ()=>{}  -> Es una función anónima
 */
/*
    function nombre(){} -> Es una función con entorno
*/

/**
 * una funcion es una forma de declarar código en bloques
 * - Una función puede recibir datos de entrada que son conocidos como parámetros
 * - Una funcion puede devolver datos de salida que son conocidos como resultado
 */

const suma = function (a, b) {
  return a + b;
};
// son equivalentes
// function suma(a, b){

//  }

console.log(suma(1, 2));

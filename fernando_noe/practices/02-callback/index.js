/* eslint-disable max-len */
/**
 * - Una callback es una funcion que se recibe por parámetro y se invoca dentro de otra funcion
 * - La funcion "mostrar" recibe los dos primeros parámetros y se los pasa a la funcion que se pase por tercer parámetro
 */

function mostrar(a, b, callback) {
  const resultado = callback(a, b);
  console.log(resultado);
}

function suma(a, b) {
  return a + b;
}

function multiplicacion(a, b) {
  return a * b;
}

mostrar(1, 2, suma);
mostrar(2, 2, multiplicacion);

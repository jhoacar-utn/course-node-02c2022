/* eslint-disable max-len */
/**
 * una callback es una función que se recibe por parámetro y se invoca adentro de otra función
 * La función mostrar recibe los primeros dos parámetros y se los pasa a la función que se pase por tercer parámetro
 * - La función callback del tercer parámetro recibe también un  string con información en el tercer parámetro
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

mostrar(5, 2, multiplicacion);

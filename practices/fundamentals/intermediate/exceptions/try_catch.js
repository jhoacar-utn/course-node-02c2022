/* eslint radix: "off" */
/* eslint eqeqeq: "off" */
function division(numerador, denominador) {
  if (Number.isNaN(parseInt(numerador))) {
    throw new Error('El numerador debe ser un numero');
  }
  if (Number.isNaN(parseInt(denominador))) {
    throw new Error('El denominador debe ser un numero');
  }

  if (denominador == 0) {
    /**
         * throw significa lanzar, y lanzara un nuevo objeto
         * el cual tendra un mensaje con la causa del error
         */
    throw new Error('No se puede dividir por cero');
  }
  return numerador / denominador;
}

// try -> intentar
try {
  division('hola', 'mundo');
} catch (error) { // Si ocurre un error, utilizamos el 'catch' -> agarrar
  console.log(error.message);
}

console.log('Estoy continuando el flujo del programa');

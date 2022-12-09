/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
/* eslint-disable max-len */
/** El try - catch se usa para que no se detenga el flujo del programa */
function division(numerador, denominador) {
  if (isNaN(parseInt(numerador))) {
    throw new Error('El numerador debe de ser un número');
  }
  if (isNaN(parseInt(denominador))) {
    throw new Error('El Denominador debe de ser un número');
  }

  if (denominador == 0) {
    /**
         * - throw significa lanzar, y esta linea de codigo lanzará un objeto el cual tendrá un mensaje de error
         */
    throw new Error('No se puede dividir por Cero');
  }
  return numerador / denominador;
}

// TRY -> Intenta ejecutar el código
try {
  division('hola', 'mundo');
} catch (error) { // Si ocurre un error usamos el CATCH (Agarrar)
  console.log(error.message);
}

const express = require('express');

const app = express();

/**
 * Haciendo uso de los parametros por URL podemos hacer dinamico su uso
 * - Ejemplo:
 *       - GET http://localhost:8888/usuario/jhoan -> 200 ( Hola Jhoan )
 *
 *       - GET http://localhost:8888/usuario/jhoan/carrero -> 200 ( Hola Jhoan Carrero)
 * 
 *       - GET http://localhost:8888/usuario/jhoan/carrero/pineda -> 404 Not Found
 * 
 *       - GET http://localhost:8888/usuario -> 404 Not Found
 * 
 * 
 * Al colocar ':' en la url sera declarada una 'variable' para este caso 'nombre' en 'request.params' con el contenido que venga
 *
 * Al usar el ':' seguido de la 'variable' y un '?' sera interpretado como un parametro opcional
*/

app.get('/usuario/:nombre/:apellido?/', (request, response) => {
 
  /**
   * Podemos extraer estos parametros usando el request.params de tres formas:
   *  
   *  - Declararando una variable con cualquier nombre:   const parametros = request.params;
   * 
   *  - Declarando una variable usando el destructuring:  const { params } = request;
   * 
   * - Decalarando una variable con cualquier nombre usando el destructuring: const { params: parametros } = request;
   */

  const { params: parametros } = request;

  const { nombre, apellido } = parametros;
  
  response.send(`<h1>Hola ${nombre || 'desconocido'} ${apellido || ''}</h1>`);  //como apellido es opcionar, que me tire "desconocido"
});

module.exports = app;

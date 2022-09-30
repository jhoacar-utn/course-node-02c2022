/* eslint import/no-unresolved: "off" */
const express = require('express');

const app = express();

/**
 * Si no usamos esta linea de codigo no tendremos acceso
 * a la request.query con los datos quye vendran luego de '?' en la url
*/
app.use(express.urlencoded({ extended: false }));

/**
 * Al trabajar con la query de la url, no tendremos necesidad
 * de controlar alguna ruta, porque simplemente, sera informacion
 * extra que podemos interpretar
 * Ejemplo:
 *          - GET http://localhost:8888/usuario/?nombre=jhoan&apellido=carrero
 *
 *          - GET http://localhost:8888/usuario?nombre=jhoan&apellido=carrero
 */
app.get('/usuario', (request, response) => {
  const { query } = request;
  /**
   * Podemos combinar el uso del destructuring con el spread operator
   * Un caso de uso puede ser para seguir extrayendo todos los datos
   * que hayan sido agregados
   */
  const { nombre, apellido, ...restoDeParametros } = query;

  console.log('Usted ha enviado estos parametros demas: ', restoDeParametros);

  response.send(`<h1>Hola ${nombre || 'desconocido'} ${apellido || ''}</h1>`);
});

module.exports = app;

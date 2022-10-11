/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
const express = require('express');

const app = express();

app.get('/', (request, response, next) => {
  response.send('<h1>Hola mundo</h1>');
});

/**
 * Con express podemos enviar cualquier tipo de informacion
 * como por ejemplo, el contenido de los archivos que
 * se encuentren en alguna carpeta, estos archivos comumente
 * son conocidos como archivos estaticos
 *
 * Para compartir estos archivos hacemos uso de la funcion
 * - express.static():
 *          recibe por primer parametro la ubicacion
 *          de la carpeta que se va a servir, pero debe ser
 *          como una ruta absoluta en el directorio
 *
 * - La variable __dirname nos ayudara a utilizar una ruta absoluta
 *
 * Por otro lado para integrarlo en una aplicacion de express
 * debemos hacer uso de .use(), no funcionara con verbos, como .get()
 * .post(), ...
 */
const folderLesson1 = `${__dirname}/lesson_1`;

app.use('/tasks/lesson_1', express.static(folderLesson1));

/**
 * De esta manera estaria usando
 *  TODOS LOS VERBOS porque es .use()
 *  TODAS LAS RUTAS  porque no se la especificando
 */
app.use((request, response, next) => {
  response.send('<h1>Esto funcionara para cualquier ruta y cualquier verbo</h1>');
});

module.exports = app;

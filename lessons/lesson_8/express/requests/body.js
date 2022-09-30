const express = require('express');

const app = express();

/**
 * Al trabajar con el cuerpo de la peticion (body request)
 * Seran en estos casos donde se envie informacion usando formularios
 * o enviando informacion usando JSON, en ambos casos, lo que debemos
 * hacer es usar un verbo para realizar esta peticion como es el caso de POST
 * de controlar alguna ruta, porque simplemente, sera informacion
 * Ejemplo:
 *
 * ( Como si fuera un JSON )
 *
 *          - POST http://localhost:8888/usuario
 *          - Content-Type: application/json
 *          -
 *          - {"nombre":"jhoan","apellido":"carrero"}
 * 
 *  ( Como si fuera un Formulario )
 *
 *          - POST http://localhost:8888/usuario
 *          - Content-Type: application/x-www-form-urlencoded
 *          -
 *          - nombre=jhoan&apellido=carrero
 *
 *  ( Como si fuera un Formulario con archivos )
 * 
 * Existe otra forma de enviar datos
 * Seria usando el 'Content-Type: multipart/form-data'
 * Pero este tipo de formato es usado para enviar formularios con 'archivos',
 * Es otro formato y no es de gran relevancia aprenderlo, ya que por defecto
 * todos los navegadores saben como estructurar estos datos para enviarlos
 * https://www.w3.org/Protocols/rfc1341/7_2_Multipart.html
 * 
 *          - POST http://localhost:8888/usuario
 *          - Content-Type: multipart/form-data; boundary=--------------------------568790206976467115569828
 *          - Content-Length: 278
 *          - 
 *          - ----------------------------568790206976467115569828
 *          - Content-Disposition: form-data; name="nombre"
 *          - 
 *          - pedro
 *          - ----------------------------568790206976467115569828
 *          - Content-Disposition: form-data; name="apellido"
 *          - 
 *          - perez
 *          - ----------------------------568790206976467115569828--
 */

/**
 * Si no usamos esta linea de codigo no tendremos acceso
 * a la request.body cuando sea enviado un JSON
 * con el 'Content-Type: application/json'
*/
app.use(express.json());

/**
 * Si no usamos esta linea de codigo no tendremos acceso
 * a la request.body cuando sea enviado un formulario
 * con el 'Content-Type: application/x-www-form-urlencoded'
*/
app.use(express.urlencoded({ extended: false }));

/**
 * Si no usamos esta linea de codigo no tendremos acceso
 * a la request.body cuando sea enviado un formulario
 * con el 'Content-Type: multipart/form-data'
 * 
 * Para este ultimo caso de 'Content-Type: multipart/form-data'
 * Tendremos que usar una libreria para que procese estos formularios
 * ya que contendran archivos, esto lo trabajaremos mas adelante
 * usando el paquete de 'multer'
 */
app.use(require("multer")().none());


app.post('/usuario',(request, response) => {
  
  const { body } = request;
  
  // Uso del 'destructuring' y 'spread operator' para extraer los datos de un objeto
  const { nombre, apellido, ...restoDeParametros } = body;
  
  console.log("Has enviado esta otra informacion: ", restoDeParametros)
  
  response.send(`<h1>Hola ${nombre || 'desconocido'} ${apellido || ''}</h1>`);
  
});

module.exports = app;

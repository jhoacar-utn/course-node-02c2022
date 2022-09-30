/* eslint import/no-unresolved: "off" */
/* eslint no-unused-vars: "off" */

const { Request, Response, NextFunction } = require('express');
const path = require('path');
const Modelo = require('../models');
/**
 * Funcion encargada de controlar la informacion
 * y procesarla con el modelo para luego enviar una vista
 * @param {Request} request
 * @param {Response} response
 * @param {NextFunction} next
 */
function controller(request, response, next) {
  const { saludo } = request;
  const { nombre } = request.query;

  let data = saludo || 'Hola ';
  data += nombre || 'desconocido';
  data += ` esta es tu ip ${request.ip}`;

  /**
     * Me comunico con el modelo
     */
  const welcome = new Modelo(data);
  welcome.guardar();

  /**
     * Envio la vista:
     *
     * Debido a que enviaremos un archivo que se encuentra
     * en un directorio atras, sera necesario especificarle
     * la ruta completa sin el '..', es decir, debemos resolverla
     * y para ello hacemos uso del modulo de 'path' con la funcion
     * .resolve(), la cual nos dara la ruta completa del archivo
     * pero sin los dos puntos, sino arrojaria error
     */
  const archivo = path.resolve(`${__dirname}/../views/index.html`);
  response.sendFile(archivo);
}

module.exports.welcomeController = controller;

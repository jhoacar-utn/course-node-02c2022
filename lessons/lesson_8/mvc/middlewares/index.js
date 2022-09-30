/* eslint import/no-unresolved: "off" */
/* eslint no-unused-vars: "off" */
const { Request, Response, NextFunction } = require('express');
/**
 * Funcion encargada de agregar un saludo al objeto de request
 * @param {Request} request
 * @param {Response} response
 * @param {NextFunction} next
 */
function middleware(request, response, next) {
  console.log('Has pasado por el middleware de saludo');
  request.saludo = 'Hola bienvenido ';
  next();
}

module.exports.welcomeMiddleware = middleware;

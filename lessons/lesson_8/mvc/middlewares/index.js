/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
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

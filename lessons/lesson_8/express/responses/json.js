/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
const express = require('express');

const app = express();

app.get('/welcome', (request, response, next) => {
  response.json({
    message: 'Hola Bienvenido',
  });
});

module.exports = app;

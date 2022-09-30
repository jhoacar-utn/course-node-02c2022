/* eslint import/no-unresolved: "off" */
const express = require('express');

const app = express();

app.get('/welcome', (request, response) => {
  response.json({
    message: 'Hola Bienvenido',
  });
});

module.exports = app;

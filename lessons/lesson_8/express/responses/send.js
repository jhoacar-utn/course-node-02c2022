/* eslint import/no-unresolved: "off" */
const express = require('express');

const app = express();

app.get('/welcome', (request, response) => {
  response.send('<h1>Hola Bienvenido!</h1>');
});

module.exports = app;

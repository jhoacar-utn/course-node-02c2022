/* eslint import/no-unresolved: "off" */
const express = require('express');

const app = express();

app.get('/welcome', (request, response) => {
  response.sendFile(`${__dirname}/welcome.html`);
});

module.exports = app;

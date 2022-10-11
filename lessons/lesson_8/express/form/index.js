/* eslint-disable import/no-unresolved */
const express = require('express');

const app = express();

app.use(express.static(__dirname));

module.exports = app;

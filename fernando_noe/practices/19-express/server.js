const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
    res.send("<h1>Hola desde el server</h1>");
});

module.exports = app;
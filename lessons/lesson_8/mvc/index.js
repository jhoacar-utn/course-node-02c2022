/**
 * El patron MVC o modelo-vista-controlador
 * consta en la separacion de la logica en archivos
 * diferentes para delegar responsabilidades
 * como son la de procesar los datos y procesar la vista
 */
const express = require("express");

const app = express();

app.use(require("./routes"));

const port = 8888;

app.listen(port, ()=>console.log(`Servidor escuchando en http://localhost:${port}`) );
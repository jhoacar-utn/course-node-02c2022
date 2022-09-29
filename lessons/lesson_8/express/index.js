const express = require("express")

const app = express();

const form = require('./form')

/**
 * Si usamos la funcion 'require' hacia una carpeta
 * en este caso 'requests', buscara por defecto un archivo
 * llamado 'index.js' y aprovechando que este archivo
 * exportara todo el contenido de la carpeta, lo haremos
 * usando el 'barrel export' para obtener los paquetes
 * en una sola importacion mediante el 'destructuring'
 */
const { params, query, body } = require('./requests')

app.use(params);
// app.use(query);
// app.use(body);

// Compartimos un formulario
app.use('/formulario',form);

// Creando un propio 404 not found
const handleNotFound = (req,res)=>res.status(404).send('<h1>Not Found</h1>')

app.use(handleNotFound)

const port = 8888;

app.listen(port, ()=>console.log(`Servidor escuchando en http://localhost:${port}`) );
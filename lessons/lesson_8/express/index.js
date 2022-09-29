const express = require("express")

const app = express();

const form = require('./form')

/**
 * Usando el 'barrel export' para obtener los paquetes
 * en una sola importacion
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
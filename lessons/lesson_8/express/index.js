const express = require("express")

const app = express();

/**
 * Si usamos la funcion 'require' hacia una carpeta
 * en este caso 'requests', buscara por defecto un archivo
 * llamado 'index.js' y aprovechando que este archivo
 * exportara todo el contenido de la carpeta, lo haremos
 * usando el 'barrel export' para obtener los paquetes
 * en una sola importacion mediante el 'destructuring'
 */
const { params, query, body } = require('./requests')
const { send, sendFile, json } = require("./responses");
const next = require("./next");

/**
 * Al trabajar con express podemos hacer algo muy curioso
 * que es componer aplicaciones de express entre si,
 * esto quiere decir que podemos añadir una aplicacion
 * con el metodo .use()
 * 
 * Asi como especificarle tambien la ruta donde esta aplicacion
 * podra tener acceso
 */

/**
 * Uso de requests
 */
// app.use(params);
// app.use(query);
app.use(body);

/**
 * Uso de responses
 */
// app.use(send);
// app.use(sendFile);
// app.use(json);

/**
 * Uso de next
 */
// app.use(next);

/**
 * Uso de un formulario de ejemplo,
 * usando una aplicacion y especificandole
 * una ruta especifica donde sera usada
 */
const form = require('./form')

app.use('/formulario',form);

/**
 * Uso de una callback para manejar peticiones no encontradas
 * @param {RequestHandler} req 
 * @param {Response} res 
 * @return
 */
const handleNotFound = (req,res)=>{
    res.status(404).send('<h1>Not Found</h1>')
}


/**
 * Uso de la callback para manejar las peticiones no encontradas
 */
app.use(handleNotFound)

const port = 8888;

app.listen(port, ()=>console.log(`Servidor escuchando en http://localhost:${port}`) );
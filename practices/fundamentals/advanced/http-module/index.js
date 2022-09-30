const http = require("http")

/**
 * En el modulo http, la callback para manejar
 * la conexion recibe dos parametros:
 * - El primer parametro es un objeto con la informacion de la peticion del cliente
 *  es conocida como 'request'
 * - El segundo parametro es un objeto con metodos para enviar la respuesta
 *  es conocida como 'response'
 */
function handleConnection(request, response) {

    console.log(`\n${request.method} ${request.url}`) // Extraemos el metodo y la URI de conexion
    console.log(`${request.rawHeaders}`) // Extraemos las cabeceras
    request.on("data", data => console.log(`\n\n${data.toString()}`)) // Extraemos la data si es enviada

    response.end("<h1>Hola desde el servidor</h1>")
}

const server = http.createServer(handleConnection);

function handleStartServer() {
    console.log("Servidor funcionando correctamente en http://localhost:8888")
}

server.listen(8888, handleStartServer)
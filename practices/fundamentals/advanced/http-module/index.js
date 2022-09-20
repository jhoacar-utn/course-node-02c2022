const http = require("http")

/**
 * En el modulo http, la callback para manejar
 * la conexion recibe dos parametros:
 * - El primer parametro es un objeto con la informacion de la peticion del cliente
 *  es conocida como 'request'
 * - El segundo parametro es un objeto con metodos para enviar la respuesta
 *  es conocida como 'response'
 */
function handleConnection(request, response){
    console.log("Conexion establecida")
    response.end("<h1>Hola desde el servidor</h1>")
}

const server = http.createServer(handleConnection);


function handleStartServer(){
    console.log("Servidor funcionando correctamente")
}

server.listen(8888,handleStartServer)
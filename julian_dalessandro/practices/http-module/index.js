const http = require("http");

/**
 * En el modulo HTTP, la callback para manejar la conexion
 * recibe dos parametros:
 * - El primer parametro es un objeto con la informacion de la peticion del cliente
 * - El segundo parametro es un objeto con metodos para enviar la respuesta,
 *      conocida como response
 */
function handleConnection(request, response){
    console.log("Conexion establecida");

    response.write("Hola desde el servidor");
    response.end();
}

const server = http.createServer(handleConnection);

function handleStartServer(){
    console.log("Servidor funcionando correctamente");
}

server.listen(8888, handleStartServer);
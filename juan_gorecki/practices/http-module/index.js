import { createServer } from "http";

/**
 * En el modulo http, la callback para manejar
 * la conexion recibe dos parametros:
 * - El primer parametro es un objeto con la informacion de la peticion del cliente
 *  es conocida como 'request'
 * - El segundo parametro es un objeto con metodos para enviar la respuesta
 *  es conocida como 'response'
 */

function handleConnection(request, response){
    console.log("conexion establecida")
    response.end("<h1>hola desde le servidor</h1>")
}



 const server = createServer(handleConnection);

function handleStarServer(){
    console.log("servidor funcionando correctamente")
}

 server.listen(8888,handleStarServer)
const http = require ('http');

/**
 * En el módulo http la callback para manejar la conexión recibe dos parámetros
 * - el primer parámetro es un objeto con la información de la petición del cliente, es conocida como 'request'
 * - el segundo parámetro es un objeto con métodos para enviar la respuesta, es conocida como 'response'
 */
function handleConnection(request, response){
    console.log('Conexión establecida');

    response.write('Hola desde el servidor');
    response.end();
}

const server = http.createServer(handleConnection);


function handleStartServer() {
    console.log('Servidor funcionando correctamente');
}

server.listen(8888, handleStartServer);
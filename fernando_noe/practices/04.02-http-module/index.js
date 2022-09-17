const http = require("http")

function handleConnection(request, response){
    console.log("Conexion Establecida");
    
    response.write("Hola desde el servidor");
    response.end();
}

const server = http.createServer(handleConnection);


function handleStartServer(){
    console.log("Servidor funcionando correctamente");
}

server.listen(8888,handleStartServer);

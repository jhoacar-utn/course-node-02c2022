const http = require("http")

function handleConnection( request, response){
    console.log("Conexion establecida")
    console.log(response)
}

const server = http.createServer(handleConnection);


function handleStartServer(){
    console.log("Servidor funcionando correctamente")
    
}

server.listen(8888,handleStartServer)

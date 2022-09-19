const net = require('net');

function handleConnection(socket){
    console.log("Conexion recibida")
    socket.on("data",handleIncomingData)

    function handleConnection(socket){
        console.log("Conexion recibida")
        socket.on("data",handleIncomingData)
        let response = "HTTP/1.1 200 OK\n" // Para hacer saltos de linea en un string es usando el '\n'
        response = response + "Content-type: text/html\n\n";
        response += "<h1>Hola Mundo</h1>";
        socket.write("Hola desde el servidor");
        socket.end(); // Dejamos de escribir o mandarle informacion al cliente
        socket.destroy(); // Cerramos la conexion   y mandamos la data que se haya escrito 
        /**
         * HTTP/1.1 200 OK
         * Content-type: text/html
         * 
         * Hola desde el servidor
         */
    

    }
    

}


const server = net.createServer(handleConnection)

function handleStartServer(){
    console.log("El servidor ya se encuentra en funcionamiento")
}

server.listen(8888,handleStartServer)

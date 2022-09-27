//vamos a hacer un servidor!!!//

const net = require('net');              //sacamos el modulo con require fn//

function handleIncomingData(data){
    console.log(data.toString())              //.toString para que se sea mas bonico//

 /**protocolo HTTP: 
     * 
     * HTTP/1.1 200 OK
     * Content-type: text/html
     * 
     * Hola desde el servidor
     */

    let response = "HTTP/1.1 200 OK\n"                     // Para hacer saltos de linea en un string es usando el '\n'
    response = response + "Content-type: text/html\n\n";
    response += "<h1>Hola Desde el servidor</h1>";
   
   

    this.write(response);
    this.end();                // Dejamos de escribir o mandarle informacion al cliente
    this.destroy();           // Cerramos la conexion y mandamos la data que se haya escrito 
}

function handleConnection(socket){
    console.log("Conexion recibida")
    socket.on("data",handleIncomingData)              //la callback recibe la 'data' que la procesa la fn handleIncomingData//
}

const server = net.createServer(handleConnection)              //el modulo tiene un metodo createServer pide la callback y este devuelve un servidor//

function handleStartServer(){
    console.log("El servidor anda")
}


server.listen(8888,handleStartServer)         //El numero de puerto no es cualquier numero: van desde el 1 hasta el 65.535 (2^16-1)//
           //(puerto, callback      )
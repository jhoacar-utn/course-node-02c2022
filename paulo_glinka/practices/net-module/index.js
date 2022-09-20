
const net = require('net');
function handleIncomingData(data){
    console.log(data.toString())

 let response = "HTTP/1.1 200 OK\n" // Para hacer saltos en linea en un string en usando el "\n"
    response = response + "Content-type: text/html\n\n";
    response += "<h1>Hola desde el servidor</h1>"
    
    this.write(response);
    this.end(); // dejamos de recibir o mandarle informacion al cliente
    this.destroy(); // Cerramos la conexion y mandamos la data que se haya escrito

}
function handleConnection(socket){
    console.log("conexion recibida")
    socket.on("data", handleIncomingData)
   
    

}
const server = net.createServer(handleConnection);

function handleStarServer(){
    console.log(" El servidor ya se encuentra en funcionamiento")
}
/** 
 * el numero de puerto no es al asar, los puertos 
 * vas desde el 1 hsta el 65.535 (2^16-1)
 */
server.listen(8888, handleStarServer)
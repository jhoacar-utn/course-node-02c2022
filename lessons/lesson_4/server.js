/**
 * Procedemos a requerir el modulo para crear un socket
 */
const net = require("net")

/**
 * En este modulo de "net" existen funcionalidades para red,
 * en nuestro caso utilizaremos una que sera para crear 
 * un servidor y que dicho servidor sea para recibir conexiones
 * - La funcion 'createServer' recibe un parametro,
 *  que sera la callback que se ejecutara cuando se
 *  reciba la conexion de un cliente, y se le pasara a 
 *  dicha callback como primer argumento la informacion
 *  de la conexion (socket).
 * 
 */
const server = net.createServer(handleConnectionServer);

/**
 * Esta sera la callback que usaremos cuando el servidor
 * reciba una conexion, y toda la informacion sera manipulada
 * en la variable del primer parametro
 * @param {*} socket 
 */
function handleConnectionServer(socket) {

    console.log("Conexion con un cliente establecida")

    /**
     * Para procesar la informacion que se recibe de un cliente
     * se realiza a traves de eventos, especificamente el evento
     * llamado "data" sera invocado cuando esto ocurra, entonces
     * lo que haremos sera invocar una callback que recibira por
     * primer parametro dicha data
     */
    socket.on("data", handleIncomingData);
    /**
     * Asi como existe el evento "data" para informacion entrante
     * al socket, tambien existe un evento llamado "end" que se
     * invoca cuando la conexion del cliente se ha terminado
     */
    socket.on("end", handleClientDisconnected);
}
/**
 * Esta funcion sera invocada cuando el cliente proceda a cerrar la conexion
 */
function handleClientDisconnected() {
    console.log("Cliente desconectado")
}
/**
 * Esta funcion sera invocada cuando se reciba informacion directamente
 * desde el cliente con el evento "data", y por lo tanto se recibira
 * por primer parametro, esta data que envia
 * @param {*} data 
 */
function handleIncomingData(data) {
    /**
     * Al mostrar por consola la data que envia el usuario, la debemos
     * transformar a cadena de texto con toString(), ya que es procesada
     * como bytes
     */
    console.log("Datos del cliente: ",data.toString())
    /**
     * Llegado a este punto es importante a ver comprendido muy bien la
     * diferencia entre una arrow function y una funcion normal, y es
     * porque podemos hacer uso de la variable "this", esto es para
     * aprovecharnos del contexto en que se encuentra esta funcion
     * y por ejemplo invocar un metodo que se encuentra presente como
     * es el caso de .write() que nos permite escribir informacion hacia el
     * cliente
     */
    this.write("Hola desde el servidor")
    /**
     * Asi como existe .write() tambien existen otros metodos, tales como
     * - .end() Finaliza la escritura hacia el cliente
     * - .destroy() Finaliza la conexion con el cliente
     */
    this.end()
    this.destroy()
}

/**
 * Cuando ya se encuentre definida toda la configuracion del servidor
 * con las conexiones, procedemos entonces a levantarlo usando el metodo
 * .listen() y especificandole el numero de puerto al cual queremos escuchar
 * y ademas podriamos especificarle como segundo parametro una callback,
 * la cual se ejecutara cuando ya el servidor se encuentre en funcionamiento
 */
server.listen(8888, handleStartServer);

/**
 * Funcion que sera ejecutada cuando ya el servidor se encuentre en funcionamiento
 */
function handleStartServer() {
    console.log("El servidor ha arrancado")
}

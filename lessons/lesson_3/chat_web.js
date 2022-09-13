/** 
 * Definimos la configuracion con variables
*/
const PORT = 8888;


/** 
 * Creamos el servidor con el modulo o libreria de 'net'
 *  - Al usar esta funcion 'createServer' necesitamos trabajar la logica de lo que
 *      hara el programa cuando reciba una conexion
*/
const server = require('net').createServer(function (socket) {

    /**
     * Esta funcion recibe como parametro el socket de la conexion
     * por lo tanto lo declaramos con la variable 'socket'
     */
    console.log("\nNavegador conectado");
    /**
     * Esta variable 'socket' tendra metodos y atributos, los cuales
     * me ayudaran a extraer la informacion y procesar la conexion
     * Tales atributos pueden ser como la direccion remota de conexion
     * al igual que el puerto
     */
    const clientName = `${socket.remoteAddress}:${socket.remotePort}`;
    console.log(`\nSu informacion de conexion es: ${clientName}`);

    /**
     * Algo que es comun cuando trabajamos con javascript es programar
     * con programacion orientada a eventos, esto quiere decir, que
     * cuando ocurra una accion o un acontecimiento se debera disparar o
     * ejecutar cierta logica
     * 
     * Aca podemos ver que bajo el evento 'data' que puede verse su correlacion
     * con javascript del navegador como seria con el uso de:
     * 
     * - document.addEventListener('click',callback)
     * 
     * Pues cuando se ejecute el evento 'data', sera el evento relacionado con 
     * la informacion que ha enviado el cliente conectado, por lo que en la
     * callback que le pase por parametro tendra que ejecutarse dicha logica
     * correspondiente
     */
    socket.on('data', function (data) {

        /**
         * Esta funcion recibe como parametro la data que se ha
         * enviado atraves del socket, por lo tanto lo declaramos
         * con la variable 'data', esta variable al ser recibida
         * la podremos mostrar en la consola directamente, con el
         * uso del metodo .toString() nos aseguramos que se muestre
         * como cadenas de texto
         */
        console.log("\nInformacion de la peticion (request):\n\n" + data.toString())

        /**
         * Creamos dicha respuesta con las reglas definidas directamente
         * por el protocolo http y le mandamos un simple saludo
         */
        let response = "HTTP/1.1 200 OK\n";
        response += "Content-Type: text/html\n\n";
        response += "<h1>Hola Desde el servidor</h1>";

        /**
         * Para que el cliente visualice la informacion de la respuesta
         * la escribimos directamente en el socket de conexion que tenemos,
         * para ello usamos su metodo llamado .write() y le pasamos el string
         * que deseamos enviarle
         */
        console.log("\nEnviando la respuesta (response):\n\n" + response);
        socket.write(response);

        /**
         * Luego de escrita la respuesta que se le desea enviar al cliente
         * debemos proceder a cerrar la conexion para que pueda procesar
         * el navegador la informacion recibida, para ello terminamos la 
         * escritura del socket con el metodo .end() y posteriormente 
         * lo eliminamos
         */
        socket.end();
        socket.destroy();
        console.log(`\nRespuesta enviada y finalizada la conexion con el cliente ${clientName}`);
    });

    /**
     * Hay varios eventos en el socket de conexion, entre ellos estaba
     * el de data, que es cuando el cliente envia la informacion, pero
     * tambien podemos tener el evento de cierre de conexion, por el cual
     * podemos ejecutar alguna logica que queramos, en este caso sera
     * un simple mensaje por consola 
     */
    socket.on('end', () => {
        console.log(`\nEl cliente por conexion ${clientName} se ha desconectado`);
    });
})

/** 
 * Posterior a crear el servidor debemos indicarle
 * que se quede escuchando en un puerto, para ello
 * usamos el metodo .listen() y le especificamos
 * el numero de puerto a escuchar
*/
server.listen(PORT);
console.log(`\nEl servidor ha iniciado y se encuentra en escucha del puerto ${PORT}!\n`);
/** 
 * Definimos la configuracion con variables
*/
const PORT = 8888;

/** 
 * Creamos el servidor con el modulo o libreria de 'http'
 *  - Al usar esta funcion 'createServer' necesitamos trabajar la logica de lo que
 *      hara el programa cuando reciba una conexion
*/
const server = require('http').createServer(function (req, res) {

    /**
     * Esta funcion recibe como parametros dos utilidades
     * mas sencillas de trabajar por el hecho de que la 
     * informacion ya ha sido procesada, que serian:
     * 
     *  - El primer atributo sera directamente la peticion (request)
     *      entonces comunmente la llamamos en una variable como 'req'
     *      
     *  - El segundo atributo sera directamente la respuesta (response)
     *      entonces comunmente la llamamos en una variable como 'res'
     */
    console.log("\nNavegador conectado");
    /**
     * Esta variable 'req' tendra metodos y atributos, los cuales
     * me ayudaran a extraer la informacion y procesar la peticion
     * Tales atributos pueden ser como la direccion remota de conexion
     * al igual que el puerto
     */
    const clientName = `${req.socket.remoteAddress}:${req.socket.remotePort}`;
    console.log(`\nSu informacion de conexion es: ${clientName}`);

    /**
     * Debido a que la informacion de la request, fue parseada, ya tendremos
     * acceso a ella de una manera mas organizada
    */
    console.log("\nInformacion de la peticion (request):\n\n", {
        verbo: req.method,
        ruta: req.url,
        cabeceras: req.headers
    });

    /**
     * Creamos dicha respuesta simplemente especificando
     * lo que queremos enviar
    */
    const response = "<h1>Hola Desde el servidor</h1>";

    /**
     * Para que el cliente visualice la informacion de la respuesta
     * la escribimos directamente en el socket de conexion que tenemos,
     * para ello usamos un metodo de la response llamado .write() y 
     * le pasamos el string que deseamos enviarle
    */
    console.log("\nEnviando la respuesta (response):\n\n" + response);
    res.write(response);

    /**
     * Por ultimo y crucialmente importante sera terminar la respuesta
     * para que el navegador ya pueda procesar la data enviada
     */
    res.end();
    console.log(`\nRespuesta enviada y finalizada la conexion con el cliente ${clientName}`);
})

/** 
 * Posterior a crear el servidor debemos indicarle
 * que se quede escuchando en un puerto, para ello
 * usamos el metodo .listen() y le especificamos
 * el numero de puerto a escuchar
*/
server.listen(PORT);
console.log(`\nEl servidor ha iniciado y se encuentra en escucha del puerto ${PORT}!\n`);
/**
 * Procedemos a crear las importaciones necesarias para el programa
 */
const http = require('http'); // Modulo para sockets http
const fs = require('fs'); // Modulo para procesar archivos en el sistema (fs - file system)

/** 
 * Definimos la configuracion con variables
*/
const PORT = 8888;
/**
 * La variable __dirname es una variable global que se encuentra
 * en cada ejecucion que se realice con nodejs que contiene
 * el directorio actual de este archivo, que seria 'lesson_3'
 */
const FOLDER = __dirname; 

/** 
 * Creamos el servidor con el modulo o libreria de 'http'
 *  - Al usar esta funcion 'createServer' necesitamos trabajar la logica de lo que
 *      hara el programa cuando reciba una conexion
*/
const server = http.createServer(function (req, res) {

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
     * Vamos a usar un variable para buscar los archivos que solicite
     * el navegador, para ello lo hacemos con la variable 'path'
     * y le damos un valor por defecto, que seria el index.html
     */
    let path = FOLDER + "/index.html";

    /**
     * Procedemos a buscar que archivo desea visualizar, para ello simplemente
     * validamos que no sea la raiz ya que sera directamente el 'index.html'
     * y le concatenamos la url que seria el archivo
     */
    if (req.url != '/') {
        path = FOLDER + '/' + req.url;
    }

    /**
     * Procedemos a abrir el archivo en el sistema usando el modulo de 'fs'
     * utilizando la funcion readFile, pasando como segundo argumento
     * la funcion a ejecutar cuando se ejecute
     */
    fs.readFile(path, function (err, data) {

        /**
         * Esta function recibe dos parametros:
         * - El primero es si un ocurre un error me devolvera dicha informacion alli
         * - El segundo sera ya directamente la data que se haya procesado
         */
        if (err) {
            /**
             * Si ocurrio un error es muy probable que haya sido porque no existe
             * entonces le devolvemos un error de estado de 404
             */
            res.statusCode = 404;
            res.end(err.message);
        } else {
            /**
             * Si no ha ocurrido un error, es decir, la variable 'err' se encuentra
             * vacia, pues responderemos directamente con el contenido del archivo
             */
            res.end(data);
        }
        console.log(`\nRespuesta enviada y finalizada la conexion con el cliente ${clientName}`);
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
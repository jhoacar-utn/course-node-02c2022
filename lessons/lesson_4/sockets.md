# Sockets 

- En los puertos corren los servicios que en lenguaje tecnico es conocido como sockets

<hr>

# NodeJS 

- NodeJS es un entorno de desarrollo en las maquinas usando lenguaje `javascript`,
    permitiendo controlar el sistema directamente desde codigo.

- **NO CONFUNDIR** el entorno del `navegador` con el entorno de `escritorio`, ya que las
    funcionalidades claramente no son las mismas por el hecho de que en el primer
    lugar se interactua con el navegador (Firefox, Chrome, ...) y en el segundo caso
    se interactua con el sistema operativo (Windows, Linux, ...).

<hr>

# Sala de chat

## Para realizar esta dinamica pero usando un lenguaje de programacion como seria el caso de `NodeJS` directamente podemos usar el siguiente codigo

```javascript
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

```

### Para ejecutarlo lo podemos realizar con los siguientes comandos:

```
node lessons/lesson_3/server.js
```

## Conectamos un cliente para el chat hacia el servidor en otra terminal

    
```
docker run -it --rm --add-host=mi_pc:host-gateway alpine nc mi_pc 8888
```

<hr>

# Servidor Web

## Para levantar un servicio (socket) con NodeJS para recibir peticiones `http` lo hacemos usando la misma logica anterior pero mandando un mensaje ya personalizado para el navegador:

```javascript
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
```

### Para ejecutarlo lo podemos realizar con el comando 
```
node lessons/lesson_3/chat_web.js
```

<hr>

## Claramente el codigo es un poco largo y hay ya herramientas hechas para hacer esto un poco mas sencillo como es lo siguiente:

```javascript
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
```

### Para ejecutarlo lo podemos realizar con el comando 
```
node lessons/lesson_3/server_web.js
```

## El sencillo ejemplo anterior solo mostro un mensaje que no cambiara cuando se conecte a el, para hacerlo un poco mas dinamico, la idea sera compartir el contenido de los archivos que se encuentren en una determinada carpeta y mandarselo al navegador, para ello podemos hacer lo siguiente:

```javascript
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
```

### Para ejecutarlo lo podemos realizar con el comando 
```
node lessons/lesson_3/server_files.js
```

## Para detener el proceso lo hacemos presionando la tecla `Ctrl + C`


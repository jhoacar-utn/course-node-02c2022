/** 
 * Definimos la configuracion con variables
*/
const PORT = 8888;
/**
 * Colores que se mostraran por consola
 * https://en.wikipedia.org/wiki/ANSI_escape_code#Colors
 */
const RESET = "\x1b[0m";
const BRIGHT = "\x1b[1m";
const DIM = "\x1b[2m";
const UNDERSCORE = "\x1b[4m";
const BLINK = "\x1b[5m";
const REVERSE = "\x1b[7m";
const HIDDEN = "\x1b[8m";

const FG_BLACK = "\x1b[30m";
const FG_RED = "\x1b[31m";
const FG_GREEN = "\x1b[32m";
const FG_YELLOW = "\x1b[33m";
const FG_BLUE = "\x1b[34m";
const FG_MAGENTA = "\x1b[35m";
const FG_CYAN = "\x1b[36m";
const FG_WHITE = "\x1b[37m";

const BG_BLACK = "\x1b[40m";
const BG_RED = "\x1b[41m";
const BG_GREEN = "\x1b[42m";
const BG_YELLOW = "\x1b[43m";
const BG_BLUE = "\x1b[44m";
const BG_MAGENTA = "\x1b[45m";
const BG_CYAN = "\x1b[46m";
const BG_WHITE = "\x1b[47m";



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
    console.log(FG_GREEN + "Cliente conectado\n" + RESET);
    /**
     * Esta variable 'socket' tendra metodos y atributos, los cuales
     * me ayudaran a extraer la informacion y procesar la conexion
     * Tales atributos pueden ser como la direccion remota de conexion
     * al igual que el puerto
     */
    const clientName = `${socket.remoteAddress}:${socket.remotePort}`;
    console.log(FG_YELLOW + `Su informacion de conexion es: ${clientName}\n` + RESET);
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
        console.log(FG_CYAN+"Informacion recibida por el cliente: " + FG_WHITE + data.toString() + RESET)
    });

    /**
     * Nos conectaremos al 'stdin' que es conocido como el 'standard input'
     * que traducido seria la entrada estandar, esto nos facilita la opcion
     * de poder leer la informacion tipeada por teclado y luego ejecutar
     * la logica correspondiente con ella, en este caso usando un evento
     * llamado 'data' con una callback para procesarla
     */
    process.stdin.on('data', function (data) {
        /**
         * Para que el cliente visualice la informacion de la respuesta
         * la escribimos directamente en el socket de conexion que tenemos,
         * para ello usamos su metodo llamado .write() y le pasamos el string
         * que deseamos enviarle
        */
        console.log(FG_BLUE+"Escribiendo el mensaje al cliente: " + FG_WHITE + data.toString() + RESET);
        socket.write(data.toString());
    });

    /**
     * Hay varios eventos en el socket de conexion, entre ellos estaba
     * el de data, que es cuando el cliente envia la informacion, pero
     * tambien podemos tener el evento de cierre de conexion, por el cual
     * podemos ejecutar alguna logica que queramos, en este caso sera
     * un simple mensaje por consola 
     */
    socket.on('end', () => {
        console.log(BRIGHT + FG_RED + `\nEl cliente por conexion ${clientName} se ha desconectado` + RESET);
    });
});

/** 
 * Posterior a crear el servidor debemos indicarle
 * que se quede escuchando en un puerto, para ello
 * usamos el metodo .listen() y le especificamos
 * el numero de puerto a escuchar
*/
server.listen(PORT);
console.log(BRIGHT + FG_YELLOW + `\nEl servidor ha iniciado y se encuentra en escucha del puerto ${PORT}!\n` + RESET);
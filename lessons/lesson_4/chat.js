/** 
 * Definimos la configuracion con variables
*/

/**
 * Configuracion del puerto por linea de comandos
 */
const USER_ROOT_ID = 0;
const MIN_PORT_FOR_NORMAL_USER = 1024;
const MIN_PORT_FOR_ROOT_USER = 2;
const MAX_PORT_AVAILABLE = Math.pow(2, 16) - 1; // 65.535
const DEFAULT_PORT = 8888;

/**
 * Funcion que comprueba que no sea un usuario administrador o root
 * basandose en su id (`uid`)
 * @return int
 */
const isNormalUser = function () {
    return process.getuid() != USER_ROOT_ID;
}
/**
 * Funcion que devuelve el puerto para crear el servidor
 * - Si por linea de comandos se le pasa el numero de puerto sera procesado
 *      - Si al procesar el puerto resulta ser que es mas grande del maximo
 *          disponible (65535) lanzara un excepcion
 *      - Si al procesar el puerto resulta ser que el usuario no tiene acceso para
 *          abrirlo directamente se lanzara un excepción con el mensaje correspondiente
 *      - Si al procesar el puerto resulta ser que es un usuario privilegiado
 *          pero aun asi no puede abrir el puerto correspondiente entonces se lanzara
 *          una excepcion
 * - Si no se ha pasado el puerto o directamente no es un numero se devolvera
 * un puerto por defecto, que sera `DEFAULT_PORT` (8888)
 * @throw Error
 * @return int
 */
const extractPortFromArgv = function () {

    /**
     * Extramos el puerto por la linea de comandos
     * las primeras dos posiciones corresponden a informacion
     * del entorno, que seria:
     * - Primera posicion (process.argv[0]): la ruta donde se ejecuta node
     * - Segunda posicion (process.argv[1]): la ruta del archivo que se esta ejecutando
     * - Las demas posiciones seran los argumentos del comando
     */
    const port = process.argv[2];

    if (isNaN(port)) {
        return DEFAULT_PORT;
    }

    if (port > MAX_PORT_AVAILABLE) {
        throw new Error(`Maximum port available is ${MAX_PORT_AVAILABLE}`)
    }
    if (port < MIN_PORT_FOR_NORMAL_USER && isNormalUser()) {
        throw new Error(`Minimum port for normal user is ${MIN_PORT_FOR_NORMAL_USER}`)
    }
    if (port < MIN_PORT_FOR_ROOT_USER && !isNormalUser()) {
        throw new Error(`Minimum port for root user is ${MIN_PORT_FOR_ROOT_USER}`)
    }

    return port;
}

const PORT = extractPortFromArgv();

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
 * Codificacion de las teclas en UTF-8
 * Compatible con el codigo ASCII
 * https://www.ascii-code.com/
 */
const CTRL_C = "\u0003";
const ENTER = "\u000D";
const BACKSPACE = "\u007F";

let message = "";

const getPrefixInMessage = function () {
    return FG_BLUE + "[+] Escribiendo el mensaje al cliente: " + RESET;
}

const printPrefixWithMessage = function () {
    process.stdout.write(getPrefixInMessage() + message);
}

const writeMessageInSocket = function (socket) {

    // Sin esto, nosotros solo obtendriamos el texto una vez la letra enter es presionada
    process.stdin.setRawMode(true);

    // Regresa el stdin al proceso padre 
    // (la aplicacion de node no saldra por si misma amenos 
    //  que ocurra un error o se invoque el process.exit() )
    process.stdin.resume();

    // Solo se transformara en cadena de texto codificado con utf8
    process.stdin.setEncoding('utf8');

    // Aca se procesara cualquier tipo de informacion que reciba
    process.stdin.on('data', function (key) {

        if (key === CTRL_C) {
            // Si ha decidido detener la aplicacion la cerramos
            console.log(FG_RED + "\n[-] Saliendo\n");
            process.exit(0);
        }
        else if (key === ENTER) {
            // Si ha decidido presionar la tecla enter
            // Enviaremos la informacion al cliente y reiniciaremos el mensaje a vacio
            socket.write(message + "\n");
            message = "";
            // Mostramos la opcion de cargar el mensaje pero vacio
            console.log();
            printPrefixWithMessage();
        }
        else if (key === BACKSPACE) {
            // Si ha decidio la tecla de borrar una letra
            // El mensaje ahora tendra una letra menos
            message = message.slice(0, message.length - 1);
            // Limpiaremos en consola la linea completa
            process.stdout.clearLine(0);
            // Ubicaremos el cursor en la posicion inicial
            process.stdout.cursorTo(0);
            // Mostramos el nuevo mensaje actualizado
            printPrefixWithMessage();

        } else {
            // Si ha decidido presionar cualquier tecla diferente
            // Almacena el texto en la variable de mensaje
            message += key;
            // La mostramos en la pantalla sin saltos de linea
            process.stdout.write(key)
        }
    });

}

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
    console.log(FG_GREEN + "[+] Cliente conectado\n" + RESET);
    /**
     * Esta variable 'socket' tendra metodos y atributos, los cuales
     * me ayudaran a extraer la informacion y procesar la conexion
     * Tales atributos pueden ser como la direccion remota de conexion
     * al igual que el puerto
     */
    const clientName = `${socket.remoteAddress}:${socket.remotePort}`;
    console.log(FG_YELLOW + `[+] Su informacion de conexion es: ${clientName}\n` + RESET);
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
        console.log(FG_CYAN + "\n[+] Informacion recibida por el cliente: " + FG_WHITE + data.toString() + RESET)
        printPrefixWithMessage();
    });

    /**
     * Le mostramos al usuario un texto para que sea guia para introducir
     * el mensaje que desea enviar
     */
    printPrefixWithMessage();

    /**
     * Nos conectaremos al 'stdin' que es conocido como el 'standard input'
     * que traducido seria la entrada estandar, esto nos facilita la opcion
     * de poder leer la informacion tipeada por teclado y luego ejecutar
     * la logica correspondiente con ella, en este caso usando un evento
     * llamado 'data' con una callback para procesarla
     */
    writeMessageInSocket(socket);

    /**
     * Hay varios eventos en el socket de conexion, entre ellos estaba
     * el de data, que es cuando el cliente envia la informacion, pero
     * tambien podemos tener el evento de cierre de conexion, por el cual
     * podemos ejecutar alguna logica que queramos, en este caso sera
     * un simple mensaje por consola 
     */
    socket.on('end', () => {
        console.log(BRIGHT + FG_RED + `\n\n[-] El cliente por conexion ${clientName} se ha desconectado` + RESET);
    });
});

/** 
 * Posterior a crear el servidor debemos indicarle
 * que se quede escuchando en un puerto, para ello
 * usamos el metodo .listen() y le especificamos
 * el numero de puerto a escuchar
*/
server.listen(PORT, '0.0.0.0');
console.log(BRIGHT + FG_YELLOW + `\n[+] El servidor ha iniciado y se encuentra en escucha del puerto ${PORT}!\n` + RESET);
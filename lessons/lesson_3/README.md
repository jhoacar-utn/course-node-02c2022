# Contenidos vistos en clase:

* variables y constantes
    * uso de `var` para variables globales, no recomendado
    * uso de `let` y `const` para variables locales
* funciones
    * declaracion de funciones con `function`
* diferencias entre ejecutar `javascript` en consola y por el navegador
    * Objetos y funciones en ambos entornos
        * `console`
        * `setTimeout` require una callback a ejecutar y un tiempo en milisegundos del tiempo a esperar
        * `setInterval` require una callback a ejecutar y un tiempo en milisegundos que define la concurrencia de la callback
    * Objetos y variables en consola
        * `process` objeto con la informacion del entorno de consola
            * `process.stdin` objeto para manipular los datos de entrada
            * `process.stdout` objeto para manipular los datos de salida
            * `process.stderr` objeto para manipular los errores
            * `process.env` objeto para obtener las variables de entorno
            * `process.argv` array para obtener los argumentos de entrada por consola
            * `...`
        * `module` objeto necesario para trabajar con modulos y librerias
            * `module.require` o `require` funcion que ejecuta un archivo y devuelve su resultado exportado
                * modulos ya predefinidos de node ([built-in modules](https://www.w3schools.com/nodejs/ref_modules.asp)):
                    * `assert`	Provee una serie de asersiones
                    * `buffer`	Para manejar informacion de binarios
                    * [child_process](https://www.geeksforgeeks.org/node-js-child-process/) <span style="color:yellow">Para correr procesos hijos o subprocesos</span>
                    * `cluster`	Para dividir un solo proceso de node en multiples procesos
                    * `crypto`	Para manejar funciones criptografia de [OpenSSL](https://es.wikipedia.org/wiki/OpenSSL)
                    * `dgram`	Provee implementaciones para sockets por protocolo UDP
                    * `dns`	Para hacer reviciones de resolucion de nombres de dominio (DNS)
                    * `events`	Para manejar eventos
                    * [fs](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)  <span style="color:yellow">Para manejar los archivos y directorios del sistema</span>
                    * [http](https://www.w3schools.com/nodejs/ref_http.asp) <span style="color:yellow">Para hacer que NodeJS actue como un servidor HTTP</span>
                    * `https`	Para hacer que NodeJS actue como un servidor HTTPS
                    * [net](https://www.w3schools.com/nodejs/ref_net.asp)	<span style="color:yellow">Para crear servidores y clientes</span>
                    * [os](https://www.w3schools.com/nodejs/ref_os.asp)	<span style="color:yellow">Provee informacion sobre el sistema operativo</span>
                    * [path](https://www.w3schools.com/nodejs/ref_path.asp) <span style="color:yellow">Para manejar las rutas de los archivos del sistema</span>
                    * `querystring`	Para manejar las query strings de las peticiones
                    * `readline`	Para manejar los flujos leibles de una linea al tiempo
                    * `stream`	Para manejar flujos de datos
                    * `string_decoder`	Para decodificar buffer de objetos en strings
                    * `timers`	Para ejecutar una funcion despues de un tiempo dado (milisegundos)
                    * `tls`	Para implementar TLS y SSL protocolos
                    * `tty`	Provee clases que son usadas para una terminal de texto
                    * [url](https://www.w3schools.com/nodejs/ref_url.asp)	Para parsear las direcciones web
                    * `util` Para acceder a utilidades
                    * `v8`	Para acceder a la informacion del motor v8 (the JavaScript engine)
                    * `vm`	Para compilar Javascript en una maquina virtual
                    * `zlib` Para comprimir o descomprimir archivos
            * `module.export` objeto que sera el valor devuelto en el archivo que se esta ejecutando
        * `__filename` string con el valor del archivo en el cual se esta ejecutando
        * `__dirname` string con el valor de la carpeta en la cual se esta ejecutando el archivo
            * [documentacion](https://remarkablemark.org/blog/2017/04/12/nodejs-module-dirname-filename/)
    * Objetos y variables en el navegador
        * `document`
        * `window`
        * `localStorage`
        * `...`

* Uso de `callbacks`

    ```javascript
    const mostrar = function (callback,a,b){
        console.log(callback(a,b));
    }
    const sumar = function(a,b){
        return a+b;
    }
    const multiplicar = function(a,b){
        return a*b;
    }

    mostrar(sumar,1,2);
    mostrar(multiplicar,5,3);
    ```

* Uso de `eventos`
    ```javascript
    const controladorDeEventos = {
        eventos: {},
        registrar: function (name, callback) {
            this.eventos[name] = callback;
            console.log("Eventos registrados: ", this.eventos);
        },
        emitir: function (name) {

            const evento = this.eventos[name];

            if (typeof evento !== "function") {
                console.log("El evento registrado no es una funcion");
                return;
            }

            if (name === "click") {
                evento("Se ha dado click")
            }
            if (name === "keypress") {
                evento("Se ha presionado una tecla")
            }
        }
    };


    const mostrar = function (resultado) {
        console.log(resultado);
    }

    controladorDeEventos.registrar('click', mostrar) // 'on'
    controladorDeEventos.registrar('keypress', mostrar) // 'on'

    controladorDeEventos.emitir('click') // 'emit'
    ```
    
* [Sockets usando NodeJS](./sockets.md)

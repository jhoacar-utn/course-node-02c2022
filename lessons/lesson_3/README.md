# Contenidos vistos en clase:

* variables y constantes
    * uso de `var` para variables globales, no recomendado
    * uso de `let` y `const` para variables locales
* funciones
    * declaracion de funciones con `function`
* diferencias entre ejecutar `javascript` en consola y por el navegador
    * Objetos en ambos entornos
        * `console`
    * Objetos y variables en consola
        * `process` objeto con la informacion del entorno de consola
            * `process.stdin` objeto para manipular los datos de entrada
            * `process.stdout` objeto para manipular los datos de salida
            * `process.stderr` objeto para manipular los errores
            * `...`
        * `module` objeto necesario para trabajar con modulos y librerias
            * `module.require` o `require` funcion que ejecuta un archivo y devuelve su resultado exportado
            * `module.export` objeto que sera el valor devuelto en el archivo que se esta ejecutando
        * `__dirname` string con el valor de la carpeta en la cual se esta ejecutando el archivo
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
        eventos: {
            click: function (callback) {
                callback("Se ha dado click")
            },
            keypress: function (callback) {
                callback("Se ha presionado una tecla")
            }
        },
        emitir: function (name, callback) {
            const evento = this.eventos[name];
            typeof evento === "function" && evento(callback)
        }
    };


    const mostrar = function (resultado) {
        console.log(resultado);
    }

    controladorDeEventos.emitir('click', mostrar)
    controladorDeEventos.emitir('keypress', mostrar)
    ```
    
* [Sockets usando NodeJS](./sockets.md)

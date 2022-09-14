# Contenidos vistos en clase:

* Diferencia entre arrow functions (`()=>{}`) y funciones comunes (`function(){}`)
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

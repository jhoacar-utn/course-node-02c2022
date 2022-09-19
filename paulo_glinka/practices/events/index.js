/**
 * addEventListener es un escuchador de eventos; cuando invoca este evento tengo que pasar dos parametros
 * la primera corresponde al tipo de evento (a donde lo enchancho, por ejemplo un clik)
 * y la segunda una colback, o sea un funcion.
 * Podriamos relacionar los eventos y la programacion 
 * a partir de eventos como aquellas funciones que se ejacutan luego de una accion 
 * podemos relacionarlo con el concepto de gancho (hook)
 */

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
controladorDeEventos.emitir('keypress')
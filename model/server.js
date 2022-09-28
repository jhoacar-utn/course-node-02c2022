const express = require("express")
// Libreria 'fs' (file system) es para manipular los archivos del sistema
const fs = require("fs")
const app = express()

function Modelo(data) {
    /**
     * Guardamos la variable que nos viene en la creacion de nuestro objeto (contexto o entorno)
     * Y le añadimos un salto de linea para que sea linea por linea
    */
    this.datos = data + "\n"
    /**
     * Esta funcion guardara los datos en la maquina en un archivo llamado 'data.txt'
    */
    this.guardar = () => {
        fs.appendFile('data.txt', this.datos, (error) => {
            if (error)
                console.log("Ha ocurrido un error: ", error.message)
            else
                console.log('Guardado satisfactoriamente: ', this.datos);
        });
    }
}

function controlador(request, response, next) {
    const nombre = request.query.name || "desconocido"

    // Vamos a contruir un nuevo modelo para guardar nuestra informacion
    const nuevoUsuario = new Modelo(nombre)
    // Luego invocamos el metodo para guardar esta informacion
    nuevoUsuario.guardar()

    return response.send(`<h1>Hola, se ha guardado tu nombre: ${nombre}</h1>`)
}
const ruta = "/welcome"

app.get(ruta, controlador)

module.exports = app
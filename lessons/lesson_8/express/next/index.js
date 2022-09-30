const express = require("express")

const app = express()

app.use(express.urlencoded({ extended: false }))

/**
 * Ejemplo de uso de un middleware (codigo que se pone en medio)
* para permitir o no el paso de una ruta
*/
app.get("/usuario",validacion,mensaje)

/** 
 * Funcion que cumple la funcion de middleware (software intermedio)
* Se pondra en medio para verificar la informacion antes del resultado final
*/
function validacion(request,response,next){
    
    if(request.query.nombre){ 
        // Si ha permitido un 'nombre' en la url, puede continuar
        return next()
    }else{
        return response.send("<h1>Necesita tener un nombre para esta ruta</h1>")
    }
}
/**
 * Funcion que cumple la funcion de controlador
* Mostrara el resultado final
*/
function mensaje(request,response,next){
    response.send(`<h1>Bienvenido ${request.query.nombre}</h1>`)
}

module.exports = app
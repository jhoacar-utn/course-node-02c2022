const fetch = require("node-fetch")

const url = "https://google.com"

const response = fetch(url)

response
    .then((result)=> { // El primer .then() es para recibir la respuesta
        console.log("La peticion se ha realizado con exito")
        
        return result.text() // le digo que la procese
    })
    .then((texto)=> { // El segundo .then() es para recibir el tecto procesado
        console.log("El tecto ha sido procesado")
        console.log(texto)
    })
    .catch((error)=>{console.log(error)})

console.log(response)
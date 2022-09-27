const fetch = require("node-fetch")

const url = "https://google.com"

const response = fetch(url)

response
    .then((result)=>{ // El primer .then() es para recibir la respuesta
        console.log("La peticion a internet se ha realizado con exito")
        return result.text() // Le digo que la procese
    })
    .then((texto)=>{ // El segundo .then() es para recibir el texto procesado
        console.log("El texto ha sido procesado")
        console.log(texto)
    })
    .catch((error)=>{console.log(error)})

console.log(response)
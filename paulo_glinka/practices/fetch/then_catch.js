const fetch = require("node-fetch")

const url = "http://google.com"

const response  = fetch(url)


response
    .then((result)=>{ //el primer .then() es para recibir la respuesta 
        console.log("la peticion a internet se ha realizado con exito")
        return result.text() // le digo que la procese 
    })
    .then((texto)=>{ // es para recibir el texto procesado
        console.log("El texto ha sido procesado")
        console.log(texto)
    })
    .catch((error)=>{console.log(error)})

console.log(response)

import fetch from "node-fetch"


const url = "http://google.com"

const response = fetch(url)

response.then((result)=>{ //el primer .then es para recibir la respuesta 
    console.log("la peticion a internet se ha realizado con exito")
    return result.text() //le digo q la procese
})
.then((texto)=>{ //para recibir el texto procesado
    console.log("el texto fue procesado")
    console.log(texto)
})
.catch((error)=>{console.log(error)})

console.log(response)
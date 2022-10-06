const fetch = require("node-fetch")

const url = "https://google.com"

async function makeRequest(){
    
    const response = await fetch(url)
    
    console.log("La peticion a internet se ha realizado con exito")

    const texto = await response.text()
    
    console.log("El texto ha sido procesado")

    console.log(texto)
}

makeRequest()
 
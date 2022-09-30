const fetch = require("node-fetch")

const url = "https://google.com"

/**
 * Al igual que hemos trabajado con .then() y .catch()
 * para el caso del 'await', se necesita OBLIGATORIAMENTE 
 * una funcion 'async'
 */
async function makeRequest(){
    
    const response = await fetch(url)
    
    console.log("La peticion a internet se ha realizado con exito")

    const texto = await response.text()
    
    console.log("El texto ha sido procesado")

    console.log(texto)
}

makeRequest()
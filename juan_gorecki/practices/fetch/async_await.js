import fetch from "node-fetch"


const url = "http://google.com"


/* al igual q trabajamos con .then y .catch, en el caso del await se necesita un async */

async function makeRequest(){


const response = await fetch(url)

console.log("la peticion a internet se ha realizado con exito")

const texto = await response.text()

console.log("el texto fue procesado")

console.log(texto)
}

makeRequest()
const axios = require("axios")

const url = "https://google.com"

const response = axios.get(url)

response
    .then((result) => {
        console.log("Se ha realizado la peticion y tambien procesado la data")
        const text = result.data
        console.log(text)
    })
    .catch((error) => { console.log(error) })
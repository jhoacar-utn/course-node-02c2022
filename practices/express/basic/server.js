const express = require("express")

const app = express()

app.get("/", (request,response,next)=>{
    response.send("<h1>Hola mundo</h1>")
})

module.exports = app
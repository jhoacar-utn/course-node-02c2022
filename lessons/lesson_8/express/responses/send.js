const express = require("express")

const app = express()

app.get("/welcome",(request,response,next)=>{
    response.send("<h1>Hola Bienvenido!</h1>")
})

module.exports = app
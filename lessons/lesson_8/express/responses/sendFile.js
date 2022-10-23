const express = require("express")

const app = express()

app.get("/welcome",(request,response,next)=>{
    response.sendFile(__dirname+"/welcome.html")
})

module.exports = app
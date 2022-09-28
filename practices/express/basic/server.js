const express = require("express")

const app = express()

app.get("/", (request,response,next)=>{
    response.send("<h1>Hola mundo</h1>")
})

/**
 * Con express podemos enviar cualquier tipo de informacion
 * como por ejemplo, el contenido de los archivos que 
 * se encuentren en alguna carpeta, estos archivos comumente
 * son conocidos como archivos estaticos
 * 
 * Para compartir estos archivos hacemos uso de la funcion
 * - express.static():
 *          recibe por primer parametro la ubicacion 
 *          de la carpeta que se va a servir, pero debe ser
 *          como una ruta absoluta en el directorio
 * 
 */
const folderLesson1 = __dirname+"/lesson_1"
app.get("/tasks/lesson_1",express.static(folderLesson1))


module.exports = app
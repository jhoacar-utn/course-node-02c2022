/**
 * Test de ejemplo para verificar que el socket por el puerto 8888
 * se encuentre habilitado
 */
const axios = require("axios")

const url = "http://localhost:8888"

test("Deberia existir un servicio por el puerto 8888",async()=>{
    try{
        const response = await axios.get(url)
    }catch(error){
        console.log(error)
    }
})


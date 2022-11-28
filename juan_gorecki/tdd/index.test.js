/* ejemplo de tests, para verificcar q el socket q este en el puerto 8888 y reciba info */
const axios = require("axios")

const url = "http://localhost:8888"

test("deberia existir un servicio por el puerto 8888", async ()=>{
    try{
        const response =  axios.get(url)
    }catch(error){
        console.log(error)
    }
})

axios.get(url)
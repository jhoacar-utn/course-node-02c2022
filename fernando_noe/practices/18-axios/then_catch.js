const AXIOS = require("axios");

let url = "https://google.com.ar";

const response = AXIOS.get(url);

response.then((result) =>{
    console.log("Se ha realizado la petición y procesado la data");
    const text = result.data;
    console.log(text);
}).catch((error)=>{console.log(error)})
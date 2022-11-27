import axios from "axios";

const url = "https://google.com"

const response = axios.get(url)

response
    .then((result)=>{
        console.log("se ha realizado la peticion y se proceso la data")
        const text = result.data
        console.log(text)
        
})
    .catch((error)=> { console.log(error) })
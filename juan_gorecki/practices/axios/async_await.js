import axios from "axios"

const url = "https://google.com"

const makeRequest = async () =>{
    const response = await axios.get(url)

console.log("se ha realizado la peticion y se proceso la data")

const text = response.data

console.log(text)

}

makeRequest()


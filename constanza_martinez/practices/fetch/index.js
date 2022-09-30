const fetch = require('node-fetch');

const url = 'https://google.com';

const response = fetch (url);

response
    .then((result)=>{
        console.log('La petición se ha realizado con éxito');});
        console.log(result);
    .catch((error)=>{console.log(error)})

console.log(response);


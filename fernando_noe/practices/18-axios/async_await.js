const AXIOS = require('axios');

const url = 'https://google.com.ar';

const makeRequest = async () => {
  const response = await AXIOS.get(url);

  console.log('Se ha realizado la petición y procesado la data');

  const text = response.data;
  console.log(text);
};

makeRequest();

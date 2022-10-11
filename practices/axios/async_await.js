/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
const axios = require('axios');

const url = 'https://google.com';

const makeRequest = async () => {
  const response = await axios.get(url);

  console.log('Se ha realizado la peticion y tambien procesado la data');

  const text = response.data;

  console.log(text);
};

makeRequest();

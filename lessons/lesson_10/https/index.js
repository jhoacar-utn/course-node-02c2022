/* eslint-disable no-console */
const https = require('https');
const fs = require('fs');
const path = require('path');
const app = require('./server');

const httpPort = 8888;
const httpsPort = 8443;

app.listen(httpPort, () => {
  console.log(`Servidor escuchando en http://localhost:${httpPort}`);
});

// Estas opciones son requeridas para incluir el certificado
const options = {
  key: fs.readFileSync(path.join(__dirname, 'certs', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'certs', 'cert.pem')),
};

// Crea un servicio HTTPS identico al servicio HTTP.
const secureApp = https.createServer(options, app);

secureApp.listen(httpsPort, () => {
  console.log(`Servidor escuchando en https://localhost:${httpsPort}`);
});

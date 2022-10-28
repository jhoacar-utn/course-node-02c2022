/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const selfsigned = require('selfsigned');

console.log('Generando un certificado SSL autofirmado');

const attributes = [
  {
    name: 'commonName',
    value: 'miweb.com',
  },
];

const options = {
  days: 365,
  algorithm: 'sha256',
};

const pems = selfsigned.generate(attributes, options);

console.log(pems);

if (!fs.existsSync(path.join(__dirname, 'certs'))) {
  fs.mkdirSync(path.join(__dirname, 'certs'));
}

fs.writeFileSync(path.join(__dirname, 'certs', 'cert.pem'), pems.cert);

fs.writeFileSync(path.join(__dirname, 'certs', 'key.pem'), pems.private);

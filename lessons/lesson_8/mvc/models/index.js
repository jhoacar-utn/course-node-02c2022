/* eslint-disable no-console */
const fs = require('fs');

function Modelo(data) {
  /**
    * Guardamos la variable que nos viene en la creacion de nuestro objeto (contexto o entorno)
    * Y le añadimos un salto de linea para que sea linea por linea
    */
  this.datos = `${data}\n`;
  /**
    * Esta funcion guardara los datos en la maquina en un archivo llamado 'data.txt'
    */
  this.guardar = () => {
    fs.appendFile(`${__dirname}/../data.txt`, this.datos, (error) => {
      if (error) console.log('Ha ocurrido un error: ', error.message);
      else console.log('Guardado satisfactoriamente: ', this.datos);
    });
  };
}

module.exports = Modelo;

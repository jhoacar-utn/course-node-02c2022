/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
const { Sequelize, DataTypes } = require('sequelize');

const uri = 'mysql://utn:utn@localhost:3306/utn';
const sequelize = new Sequelize(uri);

async function getData() {
  try {
    await sequelize.authenticate();
    console.log('\n\tLa conexion ha sido exitosa\n');

    /**
        * Para poder realizar consultas usando Sequelize
        * debemos pensar todo directamente como modelos
        * donde el nombre de la tabla sera la entidad con los datos
        * Sus propiedades seran cada una de las columnas
        * Y sus valores, las correspondientes filas
        */
    const ExampleSchema = {
      mensaje: {
        type: DataTypes.STRING,
      },

    };

    const Example = sequelize.define('ejemplo', ExampleSchema, {
      tableName: 'ejemplo', // Esto le especifica que tabla debe usar
      timestamps: false, // Esto quitara de la consulta las columnas 'createdAt' y 'updatedAt'
    });

    Example.removeAttribute('id'); // Esto quitara de la consulta la columna por 'id'

    const resultado = await Example.findAll();

    console.log("\nMostrando el contenido de la tabla 'ejemplo'");

    // Iteramos por cada fila
    resultado.map((fila) => {
      console.log("\nMostrando el contenido de la columna 'mensaje'");
      console.log(`\n\t${fila.mensaje}`);
    });

    // Detenemos el programa con 0 errores
    process.exit(0);
  } catch (error) {
    console.error('No es posible conectarse debido a un error: ', error.message);
  }
}

getData();

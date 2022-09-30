/* eslint import/no-unresolved: "off" */
const mongoose = require('mongoose');

const uri = 'mongodb://utn:utn@localhost:27017/utn';

async function getData() {
  try {
    await mongoose.connect(uri);
    console.log('\n\tLa conexion ha sido exitosa\n');

    /**
        * Para poder realizar consultas usando Mongoose
        * debemos pensar todo directamente como modelos
        * donde el nombre de la coleccion sera la entidad con los datos
        * Sus propiedades seran cada una de los indices
        * Y sus valores los correspondientes documentos
        */
    const ExampleSchema = new mongoose.Schema({
      mensaje: String,
    }, {
      collection: 'ejemplo', // Esto le especifica que coleccion debe usar
      timestamps: false, // Esto quitara de la consulta los campos 'created_at' y 'updated_at'
    });

    const Example = mongoose.model('ejemplo', ExampleSchema);

    const resultado = await Example.find();

    console.log("\nMostrando el contenido de la coleccion 'ejemplo'");

    // Iteramos por cada documento
    resultado.map((documento) => {
      console.log("\nMostrando el contenido del campo 'mensaje'");
      console.log(`\n\t${documento.mensaje}`);
      return documento;
    });

    process.exit(0); // Detenemos el programa
  } catch (error) {
    console.error('No es posible conectarse debido a un error: ', error.message);
  }
}

getData();

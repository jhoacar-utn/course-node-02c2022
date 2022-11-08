const mongoose = require('mongoose');
const ToDo = require('./models/to-do');
const data = require('./data/toDos.json');

const uri = process.env.DB_URI;

async function connection() {
  await mongoose.connect(uri);
  console.log('conexion exitosa');
  const totalToDos = await ToDo.countDocuments();
  console.log('Cantidad de Tareas en la base de datos: ', totalToDos);
  if (totalToDos === 0) {
    console.log('Insertando: ', data);
    await ToDo.insertMany(data);
  }
}

module.exports = connection;

require('dotenv').config();

const mongoose = require('mongoose');
const Emoji = require('./models/emoji');
const data = require('./data/emojis.json');

const uri = process.env.DB_URI;
async function connection() {
  await mongoose.connect(uri);
  console.log('conexion exitosa');

  const totalEmoji = await Emoji.countDocuments();
  console.log('Cantidad de Tareas en la base de datos: ', totalEmoji);

  if (totalEmoji === 0) {
    console.log('Cargando datos');
    await Emoji.insertMany(data);
  }
}

module.exports = connection;

const mongoose = require('mongoose');
const EmojiModel = require('./models/emojiModel');
const data = require('./data/emojis.json');

const URI = process.env.DB_URI;

async function connection() {
  await mongoose.connect(URI);
  console.log('conexion exitosa');
  const totalEmojis = await EmojiModel.countDocuments();
  console.log('Cantidad de Emojis en la base de datos: ', totalEmojis);
  if (totalEmojis === 0) {
    console.log('Insertando: ', data);
    await EmojiModel.insertMany(data);
  }
}

module.exports = connection;

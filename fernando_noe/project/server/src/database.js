const mongoose = require('mongoose');
const emoji = require('./models/emojis');
const data = require('./data/emojis.json');

const uri = process.env.DB_URI;

async function connection() {
  await mongoose.connect(uri);
  console.log('¡Conexion exitosa!');
  const totalEmojis = await emoji.countDocuments();

  console.log('cantidad de Emojis en la BD: ', totalEmojis);
  // eslint-disable-next-line eqeqeq
  if (totalEmojis == 0) {
    console.log('Insertando: ', data);
    await emoji.insertMany(data);
  }
}

module.exports = connection;

/*
main()
  .catch((error) => {
    console.log('Un error ha ocurrido: ', error.message);
  });
  */

const mongoose = require('mongoose');
const emojiModel = require('./models/emoji');
const emojis = require('./data/emojis.json');

const uri = process.env.DB_URI;

async function connection() {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Conexión exitosa');

  const totalEmojis = await emojiModel.countDocuments();

  console.log(`Cantidad de emojis en la base de datos: ${totalEmojis}`);

  const parsedEmojis = emojis.map((emoji) => ({
    emoji: emoji.emoji,
    name: emoji.name,
    votes: 0,
  }));

  if (totalEmojis === 0) {
    console.log('Insertando: ', parsedEmojis);
    await emojiModel.insertMany(parsedEmojis);
  }
}

module.exports = connection;

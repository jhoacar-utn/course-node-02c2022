const mongoose = require('mongoose');

/* Establezco las propiedades del esquema */
const emojiSchema = new mongoose.Schema({
  id: String,
  emoji: String,
  name: String,
  votes: Number,
});

/* Creo el Modelo */
const emoji = mongoose.model('emoji', emojiSchema);

module.exports = emoji;

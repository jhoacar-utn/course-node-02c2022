const mongoose = require('mongoose');

const emojiSchema = new mongoose.Schema({
  emoji: String,
  name: String,
  votes: Number,
});

const emojiDB = mongoose.model('emojiDB', emojiSchema);

module.exports = emojiDB;

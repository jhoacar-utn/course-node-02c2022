const mongoose = require('mongoose');

const EmojiSchema = new mongoose.Schema({
  emoji: String,
  name: String,
  votes: {
    type: Number,
    default: 0,
  },
});

const Emoji = mongoose.model('Emoji', EmojiSchema);

module.exports = Emoji;

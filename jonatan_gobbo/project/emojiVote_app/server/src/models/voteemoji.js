const mongoose = require('mongoose');

const voteEmojiSchema = new mongoose.Schema({
  id: String,
  emoji: String,
  name: String,
  votes: Number,
});

const emojiApp = mongoose.model('emojiApp', voteEmojiSchema);

module.exports = emojiApp;
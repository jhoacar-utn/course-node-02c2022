const mongoose = require('mongoose');

const emojiSchema = mongoose.Schema({
  name: String,
  emoji: String,
  group: String,
  sub_group: String,
  codepoints: String,
  votes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const EmojiModel = mongoose.model('emojis', emojiSchema);

module.exports = EmojiModel;

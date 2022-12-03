const { model, Schema } = require('mongoose');

const EmojiSchema = new Schema({
  emoji: String,
  name: String,
  votes: {
    type: Number,
    default: 0,
  },
}, {
  versionKey: false,
});

const Emoji = model('emoji', EmojiSchema);

module.exports = Emoji;

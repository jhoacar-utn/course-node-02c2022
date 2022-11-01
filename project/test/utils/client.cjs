const { v4: uuid } = require('uuid');

const LENGTH = parseInt(Math.random() * 100 + 100, 10);
const emojis = [...Array(LENGTH).keys()].map(() => ({
  _id: uuid(),
  name: 'Wink Emoji',
  emoji: '😉',
  votes: parseInt(Math.random() * 1000, 10),
}));

const getEmojis = () => emojis;

const getEmoji = () => emojis[0];

const voteEmoji = () => ({ ...emojis[0], votes: emojis[0].votes + 1 });

export {
  getEmojis, getEmoji, voteEmoji, emojis,
};

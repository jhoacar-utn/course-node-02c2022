const { v4: uuid } = require("uuid");
const LENGTH = parseInt(Math.random() * 100 + 100);
const emojis = [...Array(LENGTH).keys()].map(() => {
  return {
    _id: uuid(),
    name: "Wink Emoji",
    emoji: "😉",
    votes: parseInt(Math.random() * 1000),
  };
});

const getEmojis = () => {
  return emojis;
};

const getEmoji = () => {
  return emojis[0];
};

const voteEmoji = () => {
  return { ...emojis[0], votes: emojis[0].votes + 1 };
};

export { getEmojis, getEmoji, voteEmoji, emojis };

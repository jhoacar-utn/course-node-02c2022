const mongoose = require('mongoose');
const Emoji = require('../models/emoji');
const { uri } = require('../config/database');
const emojis = require('../data/emojis.json');

async function loadEmojis() {
  console.log('Loading all emojis in the database...');
  await Emoji.insertMany(emojis.map((emoji, index) => ({ ...emoji, index })));
  console.log('Amount of emojis loaded in database: ', emojis.length);
}

async function connection() {
  console.log(`Connecting to ${uri}`);

  await mongoose.connect(uri);

  console.log(`Connecion established to ${uri}`);

  const amount = await Emoji.countDocuments();

  console.log('Amount of emojis in database: ', amount);

  if (amount === 0) await loadEmojis();
}

module.exports = connection;

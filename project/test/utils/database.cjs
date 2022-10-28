/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
const mongoose = require('mongoose');
const { DB_URI } = require('../config.cjs');

console.log(`Using ${DB_URI} to make connections`);

const makeConnection = async () => {
  await mongoose.connect(DB_URI);
};
const removeConnection = async () => {
  await mongoose.disconnect();
};

const removeDataInDatabase = async () => {
  const collections = await mongoose.connection.db.collections();
  await Promise.all(collections.map((collection) => collection.drop()));
};
const getAllData = async () => {
  const collections = await mongoose.connection.db.collections();
  const namesCollections = await Promise.all(
    collections.map((collection) => collection.collectionName),
  );
  const data = [];
  for (const collection of namesCollections) {
    data.push(
      await new Promise((resolve, reject) => {
        mongoose.connection
          .collection(collection)
          .find({})
          .toArray((err, result) => {
            if (err) {
              reject(err);
            } else resolve(result);
          });
      }),
    );
  }
  return data;
};

module.exports = {
  makeConnection,
  removeConnection,
  getAllData,
  removeDataInDatabase,
  mongoose,
};

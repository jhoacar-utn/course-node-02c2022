/* eslint-disable radix */
/* eslint-disable no-restricted-globals */
const emojis = require('../models/emojis');

module.exports.index = async (req, res) => {
  console.log('Index function');

  let { start, limit } = req.query;

  if (!start || isNaN(parseInt(start)) || start < 0) {
    start = 0;
  }

  if (!limit || isNaN(parseInt(limit)) || limit > 10) {
    limit = 10;
  }
  if (limit < 1) {
    limit = 1;
  }

  try {
    const countEmojis = await emojis.countDocuments();
    let listEmojis = await emojis.find()
      .sort({
        votes: 'desc', /* filtro por orden descendente */
      });
    // .skip(start)
    // .limit(limit);
    listEmojis = listEmojis.slice(start);
    listEmojis = listEmojis.filter((item, index) => index < limit);

    res.status(200).json({
      result: listEmojis,
      total: countEmojis,
    });
  } catch (error) {
    res.status(500).json({
      errors: [{
        message: error.message,
      }],
    });
  }
};

module.exports.show = async (req, res) => {
  console.log('show function');

  const { id } = req.params;

  try {
    const emoji = await emojis.findById(id);

    res.status(200).json({
      result: emoji,
    });
  } catch (error) {
    if (!id) {
      res.status(404).json({
        errors: [{
          message: error.message,
        }],
      });
    } else {
      res.status(500).json({
        errors: [{
          message: error.message,
        }],
      });
    }
  }
};

const { Types } = require('mongoose');
const Emoji = require('../models/emoji');
const { notFound, serverError } = require('./errors');

module.exports.index = async (req, res) => {
  try {
    const { start, limit } = req.query;

    const total = await Emoji.countDocuments();

    const emojis = await Emoji.find()
      .sort({
        votes: 'desc',
      })
      .skip(start)
      // .limit(limit)
      .exec();

    emojis.length = limit;

    return res.json({
      result: emojis.filter(((emoji) => emoji)),
      total,
    });
  } catch (error) {
    return serverError(error, req, res);
  }
};

module.exports.show = async (req, res) => {
  try {
    const { id } = req.params;

    if (!Types.ObjectId.isValid(id)) {
      return notFound(req, res);
    }

    const emoji = await Emoji.findById(id);

    if (!emoji) {
      return notFound(req, res);
    }

    return res.json({
      result: emoji,
    });
  } catch (error) {
    return serverError(error, req, res);
  }
};

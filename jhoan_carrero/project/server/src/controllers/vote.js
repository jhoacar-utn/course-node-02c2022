const Emoji = require('../models/emoji');
const { notFound, serverError } = require('./errors');

module.exports.vote = async (req, res) => {
  try {
    const { id } = req.body;

    let emoji = await Emoji.findById(id);

    if (!emoji) {
      return notFound(req, res);
    }

    emoji = await Emoji.findByIdAndUpdate(id, { $inc: { votes: 1 } });

    return res.json({
      result: { ...emoji.toObject(), votes: emoji.votes + 1 },
    });
  } catch (error) {
    return serverError(error, req, res);
  }
};

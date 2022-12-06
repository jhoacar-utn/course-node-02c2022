const Emoji = require('../models/emoji');

module.exports.votes = async (req, res) => {
  const { _id } = req.body;

  try {
    const voteEmoji = await Emoji.findByIdAndUpdate(_id, {
      $inc: {
        votes: 1,
      },
    });

    res.status(200).json({
      result: voteEmoji,
    });
  } catch (error) {
    if (!_id) {
      res.status(404).json({
        errors: [
          {
            message: error.message,
          },
        ],
      });
    } else {
      res.status(500).json({
        errors: [
          {
            message: error.message,
          },
        ],
      });
    }
  }
};

const Emojis = require('../models/emoji');

const index = async (req, res) => {
  let { start, limit } = req.query;

  if (!start || Number.isNaN(parseInt(start, 10)) || start < 0) {
    start = 0;
  }

  if (!limit || Number.isNaN(parseInt(limit, 10)) || limit > 10) {
    limit = 10;
  }

  if (limit < 0) {
    limit = 0;
  }

  try {
    const countEmojis = await Emojis.countDocuments();
    let listEmojis = await Emojis.find()
      .sort({
        priority: 'desc',
      });

    listEmojis = listEmojis.slice(start);
    listEmojis = listEmojis.filter((item, index) => index < limit);

    res.json({
      result: listEmojis,
      total: countEmojis,
    });
  } catch (error) {
    res.status(500).json({
      errors: [
        {
          message: 'Database failed',
        },
      ],
    });
  }
};

const show = async (req, res) => {
  const { id } = req.params;

  try {
    const Emoji = await Emojis.findById(id);

    res.json({
      result: Emoji,
    });
  } catch (error) {
    res.status(404).json({
      errors: [
        {
          message: 'Not found',
        },
      ],
    });
  }
};

const vote = async (req, res) => {
  const { id } = req.body;

  try {
    const Emoji = await Emojis.findByIdAndUpdate(id, {
      $inc: {
        votes: 1,
      },
    });

    res.status(200).json({
      result: Emoji,
    });
  } catch (error) {
    res.status(500).json({
      errors: [
        {
          message: error.message,
        },
      ],
    });
  }
};

module.exports = { index, show, vote };

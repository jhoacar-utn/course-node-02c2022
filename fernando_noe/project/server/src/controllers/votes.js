const emojis = require('../models/emojis');

module.exports.votes = async function (req, res) {
  console.log('vote function');

  const { id } = req.params;
  // const {id} = req.body;

  try {
    const emoji = await emojis.findByIdAndUpdate(id, {
      $inc: {
        votes: 1,
      },
    });

    res.status(200).json({
      result: emoji,
    });
  } catch (error) {
    if (!id) {
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

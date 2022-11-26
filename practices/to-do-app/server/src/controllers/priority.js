const ToDo = require('../models/to-do');

module.exports.priority = async (req, res) => {
  const { id } = req.body;

  try {
    const toDo = await ToDo.findByIdAndUpdate(id, {
      $inc: {
        priority: 1,
      },
    });

    res.json({
      result: toDo,
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

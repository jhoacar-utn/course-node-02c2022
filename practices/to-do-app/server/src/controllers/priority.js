const ToDo = require('../models/to-do');

module.exports.priority = async (req, res) => {
  console.log('Priority Function');

  const { id } = req.params;

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

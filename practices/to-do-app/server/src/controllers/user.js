const User = require('../models/user');

/**
 * This function create a new User in the database
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
module.exports.create = async (req, res) => {
  try {
    const userCreated = await User.create(req.body);

    return res.status(201).json({
      result: userCreated,
    });
  } catch (error) {
    return res.status(500).json({
      errors: [
        {
          message: error.message,
        },
      ],
    });
  }
};
/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
module.exports.index = async (req, res) => {
  try {
    const users = await User.find();

    return res.json({
      result: users,
    });
  } catch (error) {
    return res.status(500).json({
      errors: [
        {
          message: error.message,
        },
      ],
    });
  }
};

module.exports.destroy = async (req, res) => {
  try {
    const { email } = req.query;
    const userRemoved = await User.findOneAndRemove({ email });

    return res.json({
      result: {
        removed: userRemoved,
      },
    });
  } catch (error) {
    return res.status(500).json({
      errors: [
        {
          message: error.message,
        },
      ],
    });
  }
};

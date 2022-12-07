const Login = require('../models/login');

module.exports.create = async (req, res) => {
  try {
    const login = await Login.create(req.body);

    return res.json({
      result: login,
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

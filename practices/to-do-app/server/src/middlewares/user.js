/* eslint-disable import/no-unresolved */
const { body } = require('express-validator');
const { encrypt } = require('../utils/encrypt');
const { validate } = require('../utils/validation');
/**
 * This function validate the request for register an user
 * @param {Request} request
 */
const validateRequest = async (request) => {
  /**
     * El uso de express-validator nos devuelve un middleware
     */
  const rules = [
    body('name').isLength({ min: 5 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
  ];

  const validated = await validate(rules, request);

  return validated;
};

/**
 * This function validate the request for create a new user
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
module.exports.validateRegister = async (req, res, next) => {
  const result = await validateRequest(req);

  if (result.errors) {
    return res.status(400).json({
      errors: result.errors,
    });
  }
  return next();
};

module.exports.encryptPassword = async (req, res, next) => {
  const { password } = req.body;

  if (password) {
    req.body.password = await encrypt(password);
  }

  return next();
};

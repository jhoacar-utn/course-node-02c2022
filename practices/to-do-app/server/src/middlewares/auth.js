/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
const { body } = require('express-validator');
const { Request, Response } = require('express');
const { validate } = require('../utils/validation');
const { getData } = require('../utils/jwt');
/**
 * This function validate the request for register an user
 * @param {Request} request
 * @param {Response} response
 */
const validateRequest = async (request) => {
  /**
     * El uso de express-validator nos devuelve un middleware
     */
  const rules = [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
  ];

  const validated = await validate(rules, request);
  return validated;
};

/**
 * This function validate the request for login a new user
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
module.exports.validateLogin = async (req, res, next) => {
  const result = await validateRequest(req);

  if (result.errors) {
    return res.status(400).json({
      errors: result.errors,
    });
  }
  return next();
};
/**
 * This function evaluate the cookie header,
 * and extract the token, if the token exists
 * the next function is executed, in otherwise
 * return a status 401, forbidden
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
module.exports.validateToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { cookie } = req.headers;

    if (!authorization && !cookie) {
      return res.status(401).json({
        errors: [
          {
            message: 'Cookie or Authorization header must be sent',
          },
        ],
      });
    }
    /**
     * Para extraer el token, realizamos un .split()
     * con el separador de '=' y obtenemos la ultima posicion
     * de este array con el metodo .pop()
     *
     * Si quisiera obtener el primero, usariamos el .shift()
     */
    let token = '';
    if (cookie) {
      token = cookie?.split('=')?.pop();
    } else if (authorization) {
      token = authorization;
    }

    const user = getData(token);

    if (!user) {
      return res.status(401).json({
        errors: [
          {
            message: 'Invalid token',
          },
        ],
      });
    }

    return next();
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

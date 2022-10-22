const { body } = require("express-validator");
const { validate } = require("../utils/validation");
/**
 * This function validate the request for register an user
 * @param {Request} request
 * @param {Response} response 
 */
const validateRequest = async (request, response) => {
    /**
     * El uso de express-validator nos devuelve un middleware
     */
    const rules = [
        body('email').isEmail(),
        body('password').isLength({ min: 5 }),
    ]

    return await validate(rules, request, response);

}

/**
 * This function validate the request for login a new user
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
module.exports.validateLogin = async (req, res, next) => {

    const result = await validateRequest(req, res);

    if (result.errors) {
        return res.status(400).json({
            errors: result.errors
        })
    }
    return next();
}


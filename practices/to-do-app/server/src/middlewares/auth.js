const { body } = require("express-validator");
const { validate } = require("../utils/validation");
/**
 * This function validate the request for register an user
 * @param {Request} request 
 */
const validateRequest = (request) => {
    /**
     * El uso de express-validator nos devuelve un middleware
     */
    const rules = [
        body('email').isEmail(),
        body('password').isLength({ min: 5 }),
    ]

    return validate(rules, request);

}

/**
 * This function validate the request for login a new user
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
module.exports.validateLogin = (req, res, next) => {

    const result = validateRequest(req);

    if (result.errors) {
        return res.status(400).json({
            errors: result.errors
        })
    }
    return next();
}


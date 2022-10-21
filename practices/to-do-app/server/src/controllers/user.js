const User = require("../models/user");

/**
 * This function create a new User in the database
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
module.exports.create = async (req, res, next) => {

    try {
        const userCreated = await User.create(req.body);

        return res.status(201).json({
            result: userCreated
        });

    } catch (error) {
        return res.status(500).json({
            errors: [
                {
                    message: error.message
                }
            ]
        })
    }
}
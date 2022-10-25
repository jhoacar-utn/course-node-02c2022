const User = require("../models/user");
const { compare } = require("../utils/encrypt");
/**
 * This function create an authorization validating
 * email and password
 * @param {Request} req 
 * @param {Response} res 
 */
module.exports.create = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                errors: [{
                    message: "email is not registered"
                }]
            })
        }

        const isSamePassword = await compare(password, user.password)
        
        if (!isSamePassword) {
            return res.status(400).json({
                errors: [{
                    message: "password is incorrect"
                }]
            })
        }

        return res.json({
            result: {
                message: "you are logged in",
                user
            }
        })

    } catch (error) {
        res.status(500).json({
            errors: [
                {
                    message: error.message
                }
            ]
        })
    }
}
const User = require("../models/user");
const { compare } = require("../utils/encrypt");
const { Request, Response } = require("express");
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

        const token = "mitoken";

        /**
         * Las cookies es una cabecera especial
         * de comunicacion entre el navegador y el servidor
         * para enviar informacion relacionada a
         * sesiones o a configuraciones de la pagina
         * 
         * Para enviar una cookie desde el servidor
         * Debemos enviar la siguiente cabecera:
         * 
         * - Set-Cookie: token=mitoken
         * 
         * Esto al llegar al navegador, sera interpretada
         * como informacion a almacenar y procedera a guardarla
         * en el storage o almacenamiento, y luego la enviara
         * SIEMPRE en cada peticion.
         * 
         * Es decir, las cookies, SIEMPRE son enviadas al servidor
         */
        res.setHeader('Set-Cookie','token=' + token)

        return res.json({
            result: {
                message: "you are logged in",
                user,
                token
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
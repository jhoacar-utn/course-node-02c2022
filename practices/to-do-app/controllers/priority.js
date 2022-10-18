const ToDo = require("../models/to-do");

module.exports.priority = async function (req, res) {

    console.log("Priority Function");

    const { id } = req.params;

    try {

        const toDo = await ToDo.findByIdAndUpdate(id, {
            priority: {
                $inc: 1
            }
        })

        res.json({
            result: toDo
        })

    } catch (error) {
        res.json({
            errors: [
                {
                    message: error.message
                }
            ]
        })
    }
}
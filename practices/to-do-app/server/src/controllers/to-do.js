const ToDo = require("../models/to-do");

/**
 * Esta funcion controla la cantidad devuelta
 * de lista de tareas, ordenadas por prioridad
 * 
 * - Si el campo 'start' no existe, sera el 0
 * - Si el campo 'start' no es un numero, sera el 0
 * - Si el campo 'start' es un numero negativo, sera el 0
 * 
 * - Si el campo 'limit' no existe, sera un 5
 * - Si el campo 'limit' no es un numero, sera un 5
 * - Si el campo 'limit' es un numero mayor a 5, sera un 5
 * - Si el campo 'limit' es un numero negativo, sera un 0
 */
module.exports.index = async (req, res) => {

    console.log("Index Function");

    let { start, limit } = req.query;

    if (!start || isNaN(parseInt(start)) || start < 0) {
        start = 0;
    }

    if (!limit || isNaN(parseInt(limit)) || limit > 5) {
        limit = 5;
    }

    if (limit < 0) {
        limit = 0;
    }

    try {
        const countToDos = await ToDo.countDocuments();
        const listToDos = await ToDo.find()
            .sort({
                priority: "desc"
            })
            .skip(start)
            .limit(limit);

        res.json({
            result: listToDos,
            total: countToDos
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
/**
 * Esta funcion controla la tarea a devolver
 * a partir de un parametro denominado id 
 * de la url
 */
module.exports.show = async (req, res) => {

    console.log("Show Function");

    const { id } = req.params;

    try {

        const toDo = await ToDo.findById(id)

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
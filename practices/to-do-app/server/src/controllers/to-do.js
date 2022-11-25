const ToDo = require('../models/to-do');

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
  let { start, limit } = req.query;

  if (!start || Number.isNaN(parseInt(start, 10)) || start < 0) {
    start = 0;
  }

  if (!limit || Number.isNaN(parseInt(limit, 10)) || limit > 5) {
    limit = 5;
  }

  if (limit < 0) {
    limit = 0;
  }

  try {
    const countToDos = await ToDo.countDocuments();
    let listToDos = await ToDo.find()
      .sort({
        priority: 'desc',
      });
    // .skip(start)
    // .limit(limit);
    /**
     * Custom 'skip' implementation
     *
     * La funcion .slice() devuelve una copia
     * del array con las posicion inicial deseada
     * y la posicion final deseada
     *
     * Ejemplo:
     *     -> start = 1
     *     -> limit = 3
     *      0     1    2    3    4
     *    [ "a", "b", "c", "d", "e"].slice(1,4) === [ "b" ,"c" , "d" ]
     *
     *    -> start = 2
     *    -> limit = 1
     *    [ "a", "b", "c", "d", "e"].slice(2,3) === [ "b" ,"c" , "d" ]
     */
    // This line is for replace .skip()
    // -> Sera una copia del vector desde la posicion 'start' hasta el final del array
    listToDos = listToDos.slice(start);
    // This line is for replace .limit()
    // -> Sera una copia del vector con una longitud especifica
    /**
     * Posibles soluciones:
     *  Le decimos que longitud va a tener (No aconsejable):
     *
     *    - listToDos.length = limit;
     *
     *  Recorrer cada posicion y revisar que la posicion que tiene no sobrepase el limite:
     *
     *    La function .filter() de los arrays reciben una callback como parametro donde
     *    se le pasara:
     *        * cada elemento del array como primer argumento
     *        * la posicion del elemento como segundo argumento
     *
     *    Esta funcion callback que se esta pasando, debera devolver un booleano (verdadero o falso)
     *
     *   - listToDos = listToDos.filter( (item, index) => { return index < limit } )
     *
    */
    listToDos = listToDos.filter((item, index) => index < limit);

    res.json({
      result: listToDos,
      total: countToDos,
    });
  } catch (error) {
    res.status(500).json({
      errors: [
        {
          message: error.message,
        },
      ],
    });
  }
};
/**
 * Esta funcion controla la tarea a devolver
 * a partir de un parametro denominado id
 * de la url
 */
module.exports.show = async (req, res) => {
  const { id } = req.params;

  try {
    const toDo = await ToDo.findById(id);

    res.json({
      result: toDo,
    });
  } catch (error) {
    res.status(500).json({
      errors: [
        {
          message: error.message,
        },
      ],
    });
  }
};

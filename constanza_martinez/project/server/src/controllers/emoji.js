const Emoji = require('../models/emoji');

/**
 *
 * Esta función controla la cantidad devuelta
 * de emojis, ordenadas descendentemente
 * por cantidad de votos
 *
 * - Si el campo 'start' no existe se asume como 0
 * - Si el campo ' start' no es un número o es negativo, se asume como 0
 * - Si el campo 'start' es mayor al total sera un vector vacío
 *
 * - Si el campo 'limite' no existe se asume como 10
 * - Si el campo ' limite' no es un número o mayor a 10, se asume como 10
 * - Si el campo 'limite' es un número menor a 1, se asume como 1
 *
 */
module.exports.index = async (req, res) => {
  let { start, limit } = req.query;

  if (!start || Number.isNaN(parseInt(start, 10)) || start < 0) {
    start = 0;
  }

  if (!limit || Number.isNaN(parseInt(limit, 10)) || limit > 10) {
    limit = 10;
  }
  if (limit < 1) {
    limit = 1;
  }

  try {
    const countEmojis = await Emoji.countDocuments();
    let listEmojis = await Emoji.find().sort({
      votes: 'desc',
    });
    // .skip(start)
    // .limit(limit);

    /**
     * Custom skip implementation
     */
    listEmojis = listEmojis.slice(start);
    /**
     * Custom limit implementation
     */
    listEmojis = listEmojis.filter((item, index) => index < limit);

    res.status(200).json({
      result: listEmojis,
      total: countEmojis,
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
 * Esta función controla el emoji a devolver
 * a partir de un parámetro denominado id de la url
 *
 */

module.exports.showById = async (req, res) => {
  const { id } = req.params;

  try {
    const emoji = await Emoji.findById(id);

    res.status(200).json({
      result: emoji,
    });
  } catch (error) {
    if (!id) {
      res.status(404).json({
        errors: [
          {
            message: error.message,
          },
        ],
      });
    } else {
      res.status(500).json({
        errors: [
          {
            message: error.message,
          },
        ],
      });
    }
  }
};

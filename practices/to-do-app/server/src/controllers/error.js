/**
 * This function handle 404
 * @param {Request} req
 * @param {Response} res
 */
module.exports.notfound = (req, res) => {
  res.status(404).json({
    errors: [
      {
        message: 'Not found',
      },
    ],
  });
};

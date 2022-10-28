const min = 0;
const minLimit = 1;
const max = 10;

module.exports.index = (req, res, next) => {
  const { start, limit } = req.query;

  if (Number.isNaN(parseInt(start, 10)) || start < min) {
    req.query.start = min;
  }
  if (Number.isNaN(parseInt(limit, 10)) || limit > max) {
    req.query.limit = max;
  }
  if (limit < minLimit) {
    req.query.limit = minLimit;
  }

  next();
};

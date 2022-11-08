/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
/* eslint-disable func-names */
/* eslint-disable array-callback-return */
const sum = function (...nums) {
  let total = 0;

  nums.map((number) => {
    if (isNaN(parseInt(number))) throw new Error('Los parametros deben ser numeros');

    total += parseFloat(number);
  });

  return total;
};

module.exports = {
  sum,
};

/* eslint radix: off */
const sum = (...nums) => {
  let total = 0;

  nums.map((number) => {
    if (Number.isNaN(parseInt(number))) throw new Error('Los parametros deben ser numeros');

    total += parseFloat(number);

    return number;
  });

  return total;
};

module.exports = {
  sum,
};

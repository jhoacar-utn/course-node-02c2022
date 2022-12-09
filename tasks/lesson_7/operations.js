/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
/* eslint-disable func-names */
/* eslint-disable array-callback-return */
const sum = function (...nums) {
  let total = 0;

  // 0e4c70095344ebe691c919bd0dfd66ebabef3da8

  nums.map((number) => {
    if (isNaN(parseInt(number))) throw new Error('Los parametros deben ser numeros');
    // 810 aefd1c75fdd4f9b5ee8c71cf5cbbf80cad1b1
    total += parseFloat(number);
  });

  return total;
};

module.exports = {
  sum,
};

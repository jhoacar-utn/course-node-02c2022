/* eslint-disable no-await-in-loop */
/* eslint-disable import/no-unresolved */
const { validationResult } = require('express-validator');
/**
 * This function iterate in each rule
 * Execute each rule with the request
 * Then evaluate if the request has errors
 * Then if it has errors, return that
 * otherwise return errors=null
 * @param {Middleware[]} rules
 * @param {Request} request
 */
module.exports.validate = async (rules, request) => {
  /**
     * -> Primera solucion
     * Utilizar la funcion .map, navegar por cada callback
     * ejecutarla y decirle que se espere a obtener el resultado
     * Luego utilizando el metodo Promise.all() para decirle
     * que tambien se espere a todas las promesas que se encuentren
     * en el array
     */
  // const promises = rules.map(async (middleware) => {
  //     await middleware(request,{}, () => { });
  // });
  // /**
  //  * Aca controlamos que se esperen todas al mismo tiempo
  //  */
  // await Promise.all(promises);

  /**
     * -> Segunda solucion
     */
  for (let i = 0; i < rules.length; i++) {
    await rules[i](request, {}, () => { });
  }

  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    return {
      errors: errors.array(),
    };
  }
  return {
    errors: null,
  };
};

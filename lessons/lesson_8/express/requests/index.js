/**
 * Este archivo es conocido como 'barrel export'
 * y es comunmente usado para permitir las
 * exportaciones individuales de cada archivo
 * 
 * Asi de esta manera se puede importar mas comodamente:
 * 
 *             usando una importacion especifica
 * 
 * - const params = require("./request/params");
 *                  
 *              usando el destructuring
 * 
 * - const { params } = require("./request");
 * 
 *              o usando el destructuring 
 *              con un nombre cualquiera
 * 
 * - const { params: parametros } = require("./request");
 */

module.exports.params = require("./params")
module.exports.query = require("./query")
module.exports.body = require("./body")
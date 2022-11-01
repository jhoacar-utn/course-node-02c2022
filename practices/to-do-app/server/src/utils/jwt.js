/* eslint-disable import/no-unresolved */
const { sign, verify } = require('jsonwebtoken');
/**
 * Este modulo es el encargado de generar tokens
 * a partir de objetos usando la libreria 'jsonwebtoken'
 * Y firmandolos usando una clave secreta, vendra como
 * una variable de entorno
 */
const secret = process.env.SECRET || 'claveUltraSecreta';

/**
 * This function generate a token based in an object
 * @param {object} data
 * @return {string}
 */
module.exports.getToken = (data) => sign(data, secret);
/**
 * This function return an object based in a token
 * @param {string} token
 * @return {object}
 */
module.exports.getData = (token) => verify(token, secret);

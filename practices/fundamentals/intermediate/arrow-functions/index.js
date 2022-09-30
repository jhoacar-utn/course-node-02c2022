/* eslint func-names: "off" */
/*
    ()=>{} -> Es una funcion anonima -> Arrow Functions
*/
/*
    function nombre(){} -> Es una funcion con entorno -> Funcion normal
*/
/**
 * Esta declaracion es anonima, es decir, no estara vinculada
 * de ninguna manera de los atributos del objeto al que pertenece
 */
const funcionAnonima = () => {
  console.log('Soy una funcion anonima');
  console.log(this);
};
/**
 * Esta declaracion acepta el entorno en el que se haya declarado
 * basicamente seria poder acceder a todo los atributos del objeto
 * al que pertenece
 */

const funcionNormal = function () {
  console.log('Soy una funcion normal');
  console.log(this);
  console.log(this.nombre);
};

const estudiante = {
  nombre: 'Juan',
  edad: 18,
  funcionAnonima,
  funcionNormal,
};
/**
 * Invocando la funcion anonima (arrow function)
 */
estudiante.funcionAnonima();
/**
 * Invocando la funcion normal (function)
 */
estudiante.funcionNormal();

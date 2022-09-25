/**
 * Las variabels definidas como vectores, tienen métodos predefinidos
 * - .sort() -> Sirve para ordenar el vector En orden Ascendente (Menor a mayor)
 * - .slice() -> Sirve para obtener una porcion del vector indicando los índices ej .slice(0, 3), primer indice indica el inicio y el   segundo indice no lo tomará en cuenta, en el ej de notas el resultado sería "5,8,4"
 * - .map() -> Itera un array y a partir de ese, se puede generar un nuevo array duplicandolo, sin afectar el array original
 */

const { maxHeaderSize } = require("http");

const notas = [5,8,4,7,6,3,2];

/**
 * -Funcion para multimplicar nota por 2
 */
function multiplynotes(note){
    return note * 2;
}
console.log(notas.map(multiplynotes));  

/**
 * -Funcion para encontrar el número máximo
 */
let maxNota = notas[0];
notas.map(function(nota){
    if(nota > maxNota){
        maxNota = nota;
    }  
});
console.log(maxNota);
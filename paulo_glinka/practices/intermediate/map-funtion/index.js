
/**
 * Las variables que son definidas como vectores
 * tienen metodos predefinidos, entre ellos:
 * 
 * - .sort() - Sirve para ordenar el vector (ascendentemente)
 * - .slice() - Sirve para obtener una porcion del vector especificandole:
 *      - Un inicio que la tomara en cuenta, es decir, incluira esa posicion
 *      - Un final que no la tomara en cuenta, es decir, sera una posicion menos 
 * - .map() 
 * - En vectores itera en las posiciones y te da la posibilidad de cambiar el valor que se encuentra ahi
 */
const notas  = [5,8,4,7,6,3,2]
function multiplyNotes(note){
    return note*2
}
console.log(notas.map(multiplyNotes))
/**
 * podemos usar la funcion para hacer cualquier logica que 
 * necesito, por ejemplo encontrar el numero maximo
 */

let maxNota = notas[0]

notas.map(function(nota){
    if(nota > maxNota){
        maxNota = nota;
    }

});

console.log(maxNota)
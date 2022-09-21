/**
 * Las variables que son definidas como vectores
 * tienen metodos predefinidos, entre ellos:
 * 
 * - .sort() - Sirve para ordenar el vector (ascendentemente)
 * - .slice() - Sirve para obtener una porcion del vector especificandole:
 *      - Un inicio que la tomara en cuenta, es decir, incluira esa posicion
 *      - Un final que no la tomara en cuenta, es decir, sera una posicion menos 
 * - .map()
 */


const notas = [5,8,4,7,6,3,2]

const otrasNotas = [1,5,8]

// Para transformar este vector de notas 
// a un vector donde cada nota se haya multiplicado por dos
function multiplyNotes(unaNotaCualquiera, indiceDeLaNota, copiaDelArrayDeNotas){
    return unaNotaCualquiera*2
}

console.log(notas.map(multiplyNotes))
console.log(otrasNotas.map(multiplyNotes))

/**
 * Podemos usar la funcion map para hacer cualquier logica que se desee
 * Por ejemplo encontrar el numero maximo
 */
let maxNota = notas[0]

notas.map(function(nota){
    if(nota > maxNota){
        maxNota = nota;
    }
});

console.log(maxNota)



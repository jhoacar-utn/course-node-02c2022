/* las variables son definidas como vectores tienen metodos predefinidos, entre ellos :
.sort() ordena el vector (de menor a mayor)
.slice() obtener una porcion del vector especificando el incio y final(incluiria ambos, el primer numero y ultimo)
.map()*/

const notas = [5,8,4,7,6,3,2]

//para transformar este vector de notas donde cada nota se haya multiplicado por 2

function multiplyNotes(note){
    return note*2
}

console.log(notas.map(multiplyNotes))

//podemos usar la funcion map para cualquier logica q se desea por ejemplo para encontrar el numero maximo

let maxNota = notas[0]

notas.map(function(nota){
    if(nota > maxNota){
        maxNota = nota;
    }
})

console.log(maxNota)

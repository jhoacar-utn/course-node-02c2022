/**
 * Los bucles son sentencias de codigo que se repetiran en cantidades definidas
 * o indefinidas
 * 
 * - for, while, do while
 */



// El ciclo for se usa para ejecutar sentencias de codigo una cantidad definida de veces

//for (let index = 0; index <= 12; index++) {
   // console.log(index)
    
//}

/**
 * el algoritmo recorre el array e imprime el valor de cada posicion
 */
//const array = [5,8,4,7,6,3,2]

//for (let index = 0; index < array.length; index++) {
    //console.log(array[index])
    
//}

/**
 * El algoritmo recorre el array y compara sus contenidos para 
 * arrojar como resultado el que tiene mayor valor
 */

const notas  = [5,8,4,7,6,3,2]
let maxNota = notas[0]
let materiaDeLaNota = 0
for (let materia = 0; materia < notas.length; materia++) {
    if(notas[materia] > maxNota){
        maxNota = notas[materia]
        materiaDeLaNota = materia

    }
    
}
console.log(maxNota)
console.log(materiaDeLaNota)

 // El ciclo While se utiliza para ejecutar la condicion  un numero indefinido de veces

const juego = {
    state : "jugando"
}
juego.state="terminado"
while(juego.state === "jugando"){
    console.log("estoy jugando")
    juego.state="Terminado"    
}

// https://developer.mozilla.org/es/docs/Web/JavaScript/EventLoop
/**
 * setTimeout(()=>juego.state = "Terminado",1000)
 * while(juego.state === "Jugando"){
 *   console.log("Estoy jugando")
 *   juego.state="Terminado"    
 *  }
 * 
 * - Este codigo genera un bucle infinito que no se detiene
 * debido a una cola de prioridades que tiene javascript
 * que no ejecutara la callback del setTimeout hasta que se termine
 * el bucle
 */


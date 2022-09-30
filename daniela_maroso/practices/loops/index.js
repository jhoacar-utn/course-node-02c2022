/** Los bucles son sentencias de codigo que se repetiran en cantidades definidas o indefinidas: for, while, do while  */

// El ciclo for se usa para ejecutar sentencias de codigo una cantidad definida de veces

const notas = [5,8,4,7,6,3,2]

let maxNota = notas[0]
let materiaDeLaNota = 0

for (let materia = 0; materia < notas.length; materia++) {
    // console.log(notas[materia])
    if(notas[materia] > maxNota){                              //como encontrar el valor max. en un array//
        maxNota = notas[materia]
        materiaDeLaNota = materia
    }
}

console.log(maxNota)                              //8
console.log(materiaDeLaNota)                     //1  , que es la posicion de la nota. es decir, la segunda materia. 



// El ciclo while se usa para ejecutar sentencias de codigo una cantidad indefinida de veces

const juego = {
    state : "Jugando"
}

while(juego.state === "Jugando"){
    console.log("Estoy jugando")
    juego.state="Terminado"    
}

// https://developer.mozilla.org/es/docs/Web/JavaScript/EventLoop    revisar para clarificar esta parte.
/**
 * setTimeout(()=>juego.state = "Terminado",1000)
 * while(juego.state === "Jugando"){
 *   console.log("Estoy jugando")
 *   juego.state="Terminado"    
 *  }
 * - Este codigo genera un bucle infinito que no se detiene debido a una cola de prioridades que tiene js 
 *   que no ejecutará la callback del setTimeout hasta que se termine el bucle  */

/* los bucles son sentencias de codigo q se repetiran en cantidad definidas o indefindas
for,while, do while 
*/
// el ciclo for se usa para ejecutar sentencias de codigo una cantidad definida de veces

const notas = [5,8,4,7,6,3,2]

let maxNota = notas[0]
let materiaDeLaNota = 0

for (let materia = 0; materia < notas.length; materia++) {
    /* console.log(notas[materia]) */
    if(notas[materia] > maxNota){
        maxNota = notas[materia]
        materiaDeLaNota = materia
    }
    
}

console.log(maxNota)
console.log(materiaDeLaNota)

// el ciclo while se usa para ejecutar sentencias de codigo una cantidad indefinda de veces

const juego = {
    state: "jugando"
}

while(juego.state === "jugando"){
    console.log("estoy jugando")
    juego.state="terminado"
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
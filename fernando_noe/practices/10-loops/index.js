/* eslint-disable max-len */
/**
 * Loops o Bucles, son sentecias de código que se repetiran cantidades definidas o indefinidas veces.
 * -For, While, Do While
 */

/* ----------------------Uso de FOR----------------------*/
/** El ciclo FOR se utiliza para ejecutar sentencias una cantidad definida de veces */

/**
 * -Algoritmo para encontrar un número máximo en un vector
 */
const notas = [5, 8, 4, 6, 3, 2];

let maxNota = notas[0]; // Defino una variable que encuentre el número máximo dentro del array
let materiaDeLaNota = 0;

for (let materia = 0; materia < notas.length; materia++) {
  // console.log(notas[materia])
  if (notas[materia] > maxNota) { /* Luego itero el array y voy comparando con la variable maxNota */
    maxNota = notas[materia];
    materiaDeLaNota = materia;
  }
}
console.log(`El índice de la Materia es: ${materiaDeLaNota} y su nota es: ${maxNota}`);

/* ----------------------Uso de WHILE----------------------*/
/** El ciclo WHILE se utiliza para ejecutar sentencias una cantidad indefinida de veces */

const JUEGO = {
  state: 'Jugando',
};

while (JUEGO.state === 'Jugando') {
  console.log('Sigo judando');
  JUEGO.state = 'Terminado';
}

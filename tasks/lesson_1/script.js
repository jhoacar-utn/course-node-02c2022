<<<<<<< HEAD
let coin=[];
let mult=[];
let botonC = document.querySelector("#calculate");

//ordena los multiplicadores y rompe el paso por referencia
function ordenar([...lst]){
  return lst.sort((a, b)=>a - b)
};

//generador de la lista para hacer luego la comparación
function generarLstComp (lst1, lst2){
  let resultado=[]
  for (n in lst1){
    resultado.push([lst1[n],lst2[n]]);
}
  return resultado;
};

//funcion que reordena los mejores multiplicadores con las monedas y paso por valor
//ya que también hay que utilizar el array mejorComb para sacar el puntaje final
function moverMultFinal (original, [... mejorComb]){
  return original.map((n)=>{ 
    for(i in mejorComb){
      if ( n === mejorComb[i][0] ){
        return mejorComb.splice(i,1)[0][1];
        }}})
};

botonC.addEventListener("click", () => {
      //tomando los valores
      coin= [selectorCoin1= document.querySelector("#coin_1").value,
             selectorCoin2= document.querySelector("#coin_2").value,
             selectorCoin3= document.querySelector("#coin_3").value,
             selectorCoin4= document.querySelector("#coin_4").value];

      mult= [selectorMult1= document.querySelector("#multiplier_1").value,
             selectorMult2= document.querySelector("#multiplier_2").value,
             selectorMult3= document.querySelector("#multiplier_3").value,
             selectorMult4= document.querySelector("#multiplier_4").value];
      
      //obteniendo la mejor combinación y asociando  ambos en un array de arrays
      let lstGanadora= (generarLstComp(ordenar(coin), ordenar(mult)));

      //moviendo los multiplicadores segun el orden original de las monedas
      let lstOrdenada = moverMultFinal(coin, lstGanadora);

      //"Puntaje" final!
      let resultadoFinal= lstGanadora.map(n =>{return n[0]*n[1] }).reduce((a,b)=>a+b);

      document.querySelector("#response_total").value=resultadoFinal;

      document.querySelector("#response_1").value=Number(lstOrdenada[0]);
      document.querySelector("#response_2").value=Number(lstOrdenada[1]);
      document.querySelector("#response_3").value=Number(lstOrdenada[2]);
      document.querySelector("#response_4").value=Number(lstOrdenada[3]);
});
=======
const MAX_NUMBER_BOXES = 4
const COIN_ID = "coin_"
const MULTIPLIER_ID = "multiplier_"
const RESPONSE_ID = "response_"
const TOTAL_ID = "response_total"
const BUTTON_ID = "calculate"

/**
 * Funcion encargada de extraer la informacion
 * del DOM para las monedas y los multiplicadores
 * @return object
 */
function getDataFromDOM() {

    const coins = []
    const multipliers = []

    for (let number = 1; number <= MAX_NUMBER_BOXES; number++) {

        /**
         * Template String
         * "" , ''
         * `ejemplo de codigo: ${variable}`
         * "ejemplo de codigo: " + variable
         */
        const coin = document.getElementById(`${COIN_ID}${number}`)
        const multiplier = document.getElementById(`${MULTIPLIER_ID}${number}`)

        /**
         * parseInt("18") == 18
         * parseInt("hola") == NaN (Not A Number)
         */
        coin && !isNaN(parseInt(coin.value)) && coins.push(coin.value)
        multiplier && !isNaN(parseInt(multiplier.value)) && multipliers.push(multiplier.value)
    }

    return {
        coins,
        multipliers
    }
}

function setSolutionInDOM() {

    const { coins, multipliers } = getDataFromDOM()

    /**
     * Como dato curioso si es una sola linea de codigo,
     * no sera necesaria la apertura y cierre de llaves
     * 
     * for(let index=0;index<algo;index++)
     *  console.log(index)
     */
    if (coins.length !== multipliers.length)
        return alert("La cantidad de monedas debe ser igual a la cantidad de multiplicadores")

    const solution = getCorrectMultipliers(coins, multipliers)
    const total = getTotalFromCoinsAndMultiplier(coins, solution)

    for (let number = 1; number <= MAX_NUMBER_BOXES; number++) {

        const response = document.getElementById(`${RESPONSE_ID}${number}`)

        if (response) {
            response.value = solution[number - 1]
        }
    }

    const totalElement = document.getElementById(TOTAL_ID)
    if (totalElement) {
        totalElement.value = total
    }
}


document.getElementById(BUTTON_ID)?.addEventListener("click", setSolutionInDOM)

>>>>>>> 45b45dfb94942b391f5d118b145f3ce8459d44bd

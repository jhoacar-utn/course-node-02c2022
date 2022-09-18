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
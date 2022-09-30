/**CONDICIONALES
  
 * Los condicionales son bloques de codigo que se ejecutaran apartir de una sentencia verdadera o falsa (condicion)
 * 
 * - La sintaxis para los bloques son: if, else, else if, switch, operador ternario
 * 
 * - Los operadores de union usados para los condicionales son:  && (AND) ;   || (OR)
 * 
 * - Los operadores de comparacion son:
 * 
 *   > mayor que
 *   >= mayor igual que
 *   < menor que
 *   <= menor igual que
 *   == igual (no estricto) - 18 == "18" -> TRUE
 *   === igual (estricto, evalua el tipo de dato) - 18 === "18" -> FALSE (un es un nro y el otro un string)
 *   != desigual o diferente (no estricto)
 *   !== desigual o diferente (estricto, evalua el tipo de dato)
 */


 function goToDisco(){
    console.log("Pasa loco, so grande ya")
}

const MAX_AGE_DISCO = 18

const persona = {
    age : "17",
    access: true
}

if(persona.age >= MAX_AGE_DISCO){
    goToDisco();
}else if(persona.access){
    console.log("Entrá capo, que sos VIP")
}
else{
    console.log("Te falta cocción")
}

/** Caso de switch: Funciona con el uso de 'case', 'break', 'default'  */

persona.nro = 12                                    //mi persona tiene el nro 12//

switch(persona.nro){
    case 5:                                            //si mi persona tiene el nro 5, tonces se gana la licuadora//
        console.log("Ganaste una licuadora");
        break;
    case 6:                                            //si mi persona tiene el nro 6, tonces se gana la tostadora//
        console.log("Ganaste una tostadora");
        break;
    default:                                          //si mi persona tiene cualquier otro nro, que siga participando//
        console.log("Gracias por participar");
        break;
}


/** El operador ternario: Uso de condicionales de una manera mas corta, menos lineas de codigo: condicion ? true_logic : false_logic*/


if(persona.age >= MAX_AGE_DISCO){
    goToDisco()
}else{
    console.log("Que te falta te digo!")
}

persona.age >= MAX_AGE_DISCO ? goToDisco() : console.log("Que te falta te digo!")
           //condicion       ?   caso V    : caso F //  



/**  Operadores de union:  && (AND) y  || (OR)   */

if(persona.age >= MAX_AGE_DISCO && persona.access){
    console.log("SOS EL REY !!")
}
else if(persona.age >= MAX_AGE_DISCO || persona.access){
    console.log("Te dejo pasar, pero no te la creas")
}


const name = persona.name || "Pedro"                           // undefined, pero si le agrego el OR, me tira lo que le agregue. Osea que puedo usar el OR para variables no definidas. NICE!//
const hasNro = persona.nro && "La persona tiene cash"       // Ya esta definido

console.log(name)
console.log(hasCash)
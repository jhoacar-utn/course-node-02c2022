/**
 * Los condicionales son bloques de codigo
 * que se ejecutaran apartir de una sentencia verdadera o falsa (condicion)
 * 
 * - La sintaxis para los bloques son:
 *  - if, else, else if, switch, operador ternario
 * 
 * - Los operadores de union usados para los condicionales son:
 *  - && (AND)
 *  - || (OR)
 * 
 * - Los operadores de comparacion son:
 * 
 *  - > mayor que
 *  - >= mayor igual que
 *  - < menor que
 *  - <= menor igual que
 *  - == igual (no estricto) - 18 == "18" -> TRUE
 *  - === igual (estricto, evalua el tipo de dato) - 18 === "18" -> FALSE
 *  - != desigual o diferente (no estricto)
 *  - !== desigual o diferente (estricto, evalua el tipo de dato)
 */


function goToDisco(){
    console.log("Estoy en el boliche")
}

const MAX_AGE_DISCO = 18

const persona = {
    age : "17",
    access: true
}

if(persona.age >= MAX_AGE_DISCO){
    goToDisco();
}else if(persona.access){
    console.log("Tiene acceso por un momento")
}
else{
    console.log("No tienes la edad permitida")
}

/**
 * Caso de switch
 * - Funciona con el uso de 'case' 'break', 'default'
 */
persona.cash = 12

switch(persona.cash){
    case 5:
        console.log("Puedes comprar mandarinas");
        break;
    case 6:
        console.log("Puedes comprar tomates");
        break;
    default:
        console.log("Puedes comprar mandarinas y tomates");
        break;
}

/**
 * El operador ternario
 * - Uso de condicionales de una manera mas corta, menos lineas de codigo
 * 
 * condicion ? true_logic : false_logic
 */

if(persona.age >= MAX_AGE_DISCO){
    goToDisco()
}else{
    console.log("No tienes la edad permitida")
}

persona.age >= MAX_AGE_DISCO ? goToDisco() : console.log("No tienes la edad permitida")

/**
 * Operadores de union
 * && (AND)
 * || (OR)
 */

if(persona.age >= MAX_AGE_DISCO && persona.access){
    console.log("Esta persona tiene mas privilegios")
}
else if(persona.age >= MAX_AGE_DISCO || persona.access){
    console.log("Esta persona almenos puede entrar a la discoteca")
}


const name = persona.name || "Pedro" // undefined (Uso del OR)
const hasCash = persona.cash && "La persona tiene cash" // Ya esta definido

console.log(name)
console.log(hasCash)
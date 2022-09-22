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

function goToTheMovie(){
    console.log("Estoy viendo la pelicula")
}

const MAX_AGE_MOVIE = 18 

const persona = {
    age: "18",
    access: true
}

if (persona.age >= MAX_AGE_MOVIE){
    goToTheMovie();
} else if(persona.acces){
    console.log(" Es V.I.P")
}else{
    console.log("No tiene acceso para ver la pelicula")
}
/**
 * Caso de switch
 * - Funciona con el uso de 'case' 'break', 'default'
 */

persona.cash = 12

switch(persona.cash){ 
    case 5:
        console.log("puedo comprar manzanas");
        break;
    case 6: 
        console.log(" puedo comprar bananas");
        break;
    default:
        console.log("puedes comprar manzanas y Bananas");
        break;
    }

    /**
 * El operador ternario
 * - Uso de condicionales de una manera mas corta, menos lineas de codigo
 * 
 * condicion ? true_logic : false_logic
 */

 if(persona.age >= MAX_AGE_MOVIE){
    goToTheMovie()
 } else{
    console.log("no puedes ingresar a ver la pelicula")
 }

 persona.age >= MAX_AGE_MOVIE ? goToTheMovie(): console.log("No puedes ingresar a ver la pelicula")

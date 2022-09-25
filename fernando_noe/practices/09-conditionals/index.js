/**
 * Los condicionales son Bloques de código que se ejecutan a partir de una condición si es verdadera o falsa.
 * -if, else, switch, ternario
 * - && (AND), || (OR), !(NOT)
 */


/*Uso de IF*/

const MAX_AGE_DISCO = 18;

function goToDisco(){
    console.log("Estoy en la Disco");
}

const persona = {
    age: "17",
    access: true,
}

if(persona.age >= MAX_AGE_DISCO){
   goToDisco();
}else if(persona.access){
    console.log("Tiene acceso VIP");
}else{
    console.log("No puede pasar");
}


/*Uso de SWICH*/

persona.cash = 12;

switch(persona.cash){
    case 4: 
        console.log("puede comprar mandarinas");
        break;
    case 7:
        console.log("puede comprar tomates");
        break;
    default:
        console.log("puede comprar mandarinas y tomates");
}

/*Uso de Operador Ternario*/

persona.age >= MAX_AGE_DISCO ? goToDisco() : console.log("No tienes la edad permitidaa");

/*Operadores Lógicos*/

if(persona.age >= MAX_AGE_DISCO && persona.access){
    console.log("Esta persona es mayor y es VIP");
}
if(persona.age >= MAX_AGE_DISCO || persona.access){
    console.log("Esta persona puede acceder pero no tiene todo los privilegios");
}
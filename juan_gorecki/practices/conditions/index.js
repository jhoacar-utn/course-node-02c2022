/* los condicionales son bloques de codigo q se ejecutaran apartir de una sentencia verdadera o falsa
-if , else, else if, switch, operador ternario 
los operasdores de union usados para los condicionales son: && (and) ||(or)
operadores de comparacion: > mayor, >= mayor igual, < menor, <= menor igual, == igual (no estricto 18 == "18" seria true), === igual (evalua el dato 18 === "18" seria false), != desigual(no estricto), !== desigual (estricto)*/


function goToDisco(){
    console.log("estoy en el boliche")
}


const MAX_AGE_DISCO = 18


const persona = {
    age : "17",
    access: true
}

if(persona.age >= MAX_AGE_DISCO){
    goToDisco();
}else if(persona.access){
    console.log("tiene acceso por un momento")
}
else{
    console.log("no tienes la edad permitida")
}

/* caso switch
funciona con el uso de "case" "break", "default" */
persona.cash = 12

switch(persona.cash){
    case 5:
        console.log("puedes comprar mandarinas");
        break;
        case 6:
            console.log("puedes comprar tomates");
        break;
    default:
        console.log("puedes comprar mandarinas y tomates")
}

function division (numerador, denominador){
    if(isNaN(parseInt(numerador))){
        throw new error ("el numerador debe ser un numero")
    }
    if(isNaN(parseInt(denominador))){
        throw new error ("el denominador debe ser un numero")
    }
    if (denominador == 0 ){
        /**
         * thorow significa lanzar, y lanzara un nuevo 
         * objeto el cual tendra un mensaje con la causa del 
         * error, detiene el flujo del programa 
         */
    
    throw new Error("no se puede dividir por cero")
}
    return numerador/denominador
}

console.log(division (1,"and"))
console.log(division (0,2))
console.log(division(2,0))
console.log(division(0,0))

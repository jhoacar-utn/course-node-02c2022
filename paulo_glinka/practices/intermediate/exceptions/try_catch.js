function division (numerador, denominador){
    if(isNaN(parseInt(numerador))){
        throw new Error ("el numerador debe ser un numero")
    }
    if(isNaN(parseInt(denominador))){
        throw new Error ("el denominador debe ser un numero")
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
// try -> intentar
try {
    division("hola","mundo")    
} catch (error) { // Si ocurre un error, utilizamos el 'catch' -> agarrar
    console.log(error.message)
}

console.log("Estoy contiuando el flujo del programa")



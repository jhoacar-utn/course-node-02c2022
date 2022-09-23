function division(numerador,denominador){

    if(isNaN(parseInt(numerador))){
        throw new Error("El numerador debe ser un numero")
    }
    if(isNaN(parseInt(denominador))){
        throw new Error("El denominador debe ser un numero")
    }

    if(denominador == 0){
        /**
         * throw significa lanzar, y lanzara un nuevo objeto
         * el cual tendra un mensaje con la causa del error
         */
        throw new Error("No se puede dividir por cero")
    }
    return numerador/denominador
}

console.log(division(5,"asd"))

console.log(division(1,2))

console.log(division(0,2))

console.log(division(2,0))

console.log(division(0,0))
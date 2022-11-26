

function division(numerador,denominador){
    if(isNaN(parseInt(numerador))){
        throw new Error("el numerador debe ser un numero")
    }
    if(isNaN(parseInt(denominador))){
        throw new Error("el denominador debe ser un numero")
    }

if(denominador == 0){

    /* throw es lanzar, lanzara un objeto el cual tenga un mensaje con la causa del error */
    throw new Error("no se puede dividir por 0")
}
    return numerador/denominador
}

console.log(division("gik,",5))

console.log(division(1,2))

console.log(division(0,2))

console.log(division(2,0))

console.log(division(0,0))
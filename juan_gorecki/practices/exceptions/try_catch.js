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

//intenta
try {
    division("hola","mundo")
} catch (error) { //agarrar el error
    console.log(error.message)
}


console.log("estoy continuando el flujo del programa")
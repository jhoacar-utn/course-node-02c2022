function division(numerador, denominador) {

    if(isNaN(parseInt(numerador))){
        throw new Error("El numerador no es un numero");
    }
    if(isNaN(parseInt(denominador))){
        throw new Error("El denominador no es un numero");
    }
    
    if(denominador == 0){

        /**
         * throw lanza un nuevo objeto, en este caso de error
         */
        throw new Error("No se puede dividir por 0");
    }
    return numerador/denominador;
}

console.log(division(1, 0));
console.log(division("a", 0));
console.log(division(1, "a"));
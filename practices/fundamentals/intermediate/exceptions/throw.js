<<<<<<< HEAD
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
=======
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
>>>>>>> 0d5c26ccf3da389091a938868b2e5799e45d6eb1

/**El throw se utiliza para detener el flujo del código */
function division(numerador,denominador){
    
    if(isNaN(parseInt(numerador))){
        throw new Error("El numerador debe de ser un número");
    }
    if(isNaN(parseInt(denominador))){
        throw new Error("El Denominador debe de ser un número");
    }

    if(denominador == 0){
        /**
         * - throw significa lanzar, y esta linea de codigo lanzará un objeto el cual tendrá un mensaje de error
         */
        throw new Error("No se puede dividir por Cero"); 
    }
    return numerador/denominador;
}

console.log(division(1,2));
console.log(division(0,2));
console.log(division(2,0));
console.log(division(0,0));


/**
 * El Spread_Operator se utiliza para la obtención de todas las propiedades o valores de un objeto
 */

/*
*Al sacar todos los argumentos y guardarlos en una variable, esta variable se convertira en un vector/array
*/
function suma(...nums){
    let sumar = 0;
    for(let i = 0; i < nums.length ; i++){ //Con el nums.length indicamos que se recorran todos los numeros hasata el final del array
        sumar = sumar + nums[i];
    }
    return sumar;
}

console.log(suma(1,2,5,7));
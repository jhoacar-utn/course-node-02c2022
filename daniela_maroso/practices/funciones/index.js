

/*
        ()=>{} ->         Es una funcion anonima (se encuentra declarada, pero no tiene nombre y no interactua con otras)
*/
/*
function nombre(){} ->    Es una funcion con entorno, se puede conocer con otras funciones. 
*/

/*
 * Una funcion es una forma de declarar codigo en bloques
 * - Puede recibir datos de entrada que son conocido como PARAMETROS
 * - Puede devolver datos de salida que son conocido como RESULTADOS
 */
 const suma = function(a,b){
    return a+b;
}

console.log(suma(1,2))

/**
 * Hoisting en javascript
 * 
 * Cuando se declara una variable y esta variable es una funcion, se debe asegurar
 * que se encuentre de primero antes de invocarse, ya que se arrojara un error
 * 
 * Pero el caso de que no sea una variable y sea una funcion comun, no importara
 * donde se defina ya que se aplicara un 'hoisting' y no dara errores
 */
function suma(a,b){
    return a+b
}


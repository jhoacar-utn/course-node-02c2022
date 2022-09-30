/*
    ()=>{} -> Es una funcion anonima -> Arrow Functions
*/
/*
    function nombre(){} -> Es una funcion con entorno -> Funcion normal
*/
/**
 * Esta declaracion es anonima, es decir, no estara vinculada
 * de ninguna manera de los atributos del objeto al que pertenece
 */
const funcion_anonima = ()=>{
    console.log("Soy una funcion anonima")
    console.log(this)
}
/**
 * Esta declaracion acepta el entorno en el que se haya declarado
 * basicamente seria poder acceder a todo los atributos del objeto
 * al que pertenece
 */
const funcion_normal = function(){
    console.log("Soy una funcion normal")
    console.log(this)
    console.log(this.nombre)
}

const estudiante = {
    nombre: "Juan",
    edad : 18,
    funcion_anonima: funcion_anonima,
    funcion_normal: funcion_normal
}
/**
 * Invocando la funcion anonima (arrow function)
 */
estudiante.funcion_anonima()
/**
 * Invocando la funcion normal (function)
 */
estudiante.funcion_normal()

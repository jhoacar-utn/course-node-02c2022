/*
    ()=>{} -> Es una funcion anonima -> Arrow Functions
*/
/*
    function nombre(){} -> Es una funcion con entorno -> Funcion normal
*/

const funcion_anonima = ()=>{
    console.log("Soy una funcion anonima")
    console.log(this)
}

const funcion_normal = function(){
    console.log("Soy una funcion normal")
    console.log(this)
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

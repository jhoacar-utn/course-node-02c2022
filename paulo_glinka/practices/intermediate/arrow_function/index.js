/*
() => {} es una funcion anonima 
*/
/*
function(){} -> es una funcion con entorno
*/
/**
 * 
 * una funcion es una forma de declarar codigo en bloques} a 
 * una funcion puede recibir datos de entrada que son conocidos como parametros
 * una funcion puede debolver datos de salida que son conocidos como resultado
 * 
 */

const function_anonima = ()=>{
    console.log("soy una funcion anonima")
    console.log(this)
}

const funcion_normal = function (){
    console.log("soy una funcion normal ")
    console.log(this)
}

const estudiante = {
    nombre: "Juan",
    edad: 18, 
    function_anonima: function_anonima,
    funcion_normal: funcion_normal
}

/**
 * invocando la funcion  anonima (arrow function)
 */

estudiante.function_anonima()

/**
 * Invocando la funcion normal (function)
 */

estudiante.funcion_normal()
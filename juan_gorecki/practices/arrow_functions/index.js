/* ()=>{} funcion anonima(arrow_functions) */
/* function nombre(){} */


/* es anonima, no esta vinculada con los atributos al objeto q pertenece */
const funcion_anonima = ()=>{
    console.log("soy una funcion anonima")
    console.log(this)
}
/* esta declaracion acepta el entorno en el q se haya declarado basicamente seria poder acceder a todo los atributos del objeto al que pertenece */
const funcion_normal = function(){
    console.log("soy una funcion normal")
    console.log(this)
    console.log(this.nombre)
}

const estudiante = {
    nombre: "juan",
    edad: 18,
    funcion_anonima: funcion_anonima,
    funcion_normal: funcion_normal
}

/* invocando funcion anonima */
estudiante.funcion_anonima()
/* invocando funcion normal */
estudiante.funcion_normal()
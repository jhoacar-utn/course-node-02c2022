/**
 * const nombre =[{nombre....}]  // Es un array con un objeto en la primera posicion
 * objeto = {propiedad} // declaracion de un objeto
 */

const estudiante = {
    nombre: "Paulo",
    apellido: "Glinka",
    ubicacion: {
        ciudad: "Bs. As.",
        pais: "Argentina"
    },
    estudiar: function(){
        console.log("un estudiante estudia")
    }, 
}
/**
 * Luego de la declarcion podemos cambiar 
 * los atributos usando el =
 */

estudiante.nombre = "juan"
estudiante.ubicacion = {
    pais: "Argentina",
    ciudad: "Chaco"
}
/**
 * Podemos añadirle mas propiedades si nosotros queremos
 */
estudiante.comer = function(){
    console.log("Un estudiante es una persona y por lo tanto tambien come")
}

console.log(estudiante)
/**
 * const nombre=[{nombre:....}] // Es un array con un objeto en la primera posicion
 * objeto = {propiedades} // Declaracion de un objeto
 */

const estudiante = {
    nombre:"Pablo",
    apellido: "Perez",
    ubicacion: {
        pais: "Argentina",
        ciudad: "Buenos Aires"
    },
    estudiar: function(){
        console.log("Un estudiante estudia")
    }
}
/**
 * Luego de la declaracion podemos
 * cambiar los atributos usando el '='
 */
estudiante.nombre = "Juan"
estudiante.ubicacion.ciudad = "Chaco"
/**
 * Podemos añadirle mas propiedades si nosotros queremos
 */
estudiante.comer = function(){
    console.log("Un estudiante es una persona y por lo tanto tambien come")
}

console.log(estudiante)


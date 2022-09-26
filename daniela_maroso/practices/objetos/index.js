/*OBJETOS: son un tipo de datos que tienen propiedades. 

 * const nombre=[{nombre:....}] // Es un array con un objeto en la primera posicion
 * objeto = {propiedades} // Declaracion de un objeto
 */

 const estudiante = {
    nombre:"Laura",
    apellido: "Lopez",
    ubicacion: {
        pais: "Argentina",
        ciudad: "Buenos Aires"
    },
    estudiar: function(){
        console.log("Un estudiante estudia, ponele")
    }
}
/**
 * Luego de la declaracion podemos
 * cambiar los atributos usando el '='
 */
estudiante.nombre = "Maria"
estudiante.ubicacion.ciudad = "Tucuman"
/**
 * Podemos añadirle mas propiedades si nosotros queremos
 */
estudiante.comer = function(){
    console.log("Un estudiante come")
}

console.log(estudiante)

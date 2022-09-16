/*
const nombre=[{nombre:....}] //Esto es un Array con un objeto dentro de la primera posición.
 */
const estudiante = {
    nombre: "Fernando",
    apellido: "Noé",
    ubicacion: {
        pais: "Argentina",
        ciudad: "CABA",
    },
    estudiar: function(){
        console.log("Un Estudiante estudia o intenta..");
    }
}
/**Luego de la Declaración usando el "="  podemos cambiar los atributos*/
estudiante.ubicacion = {
    pais: "Argentina",
    ciudad: "Santa Fé",
};

/**Podemos añadir más propiedades si queremos */
//FUNCION ANÓNIMA:
estudiante.comer = function(){
    console.log("Comer....");
};

console.log(estudiante);
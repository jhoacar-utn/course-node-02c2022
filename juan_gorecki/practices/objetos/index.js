const estudiante = {
    nombre: "Pablo",
    apellido: "Perez",
    ubicacion: {
        pais: "Argentina",
        ciudad: "Buenos Aires"
    },
    estudiar: function(){
        console.log("Un estudiante estudia")
    }
}
/* luego de delcarar podemos cambiar atributos con = */
estudiante.nombre = "Juan"
estudiante.ubicacion.ciudad = "chaco"
/* podemos añadirle mas propiedades si queremos */
estudiante.comer = function(){
    console.log("Un estudiante es una persona y por lo tanto tambien come")
}

console.log(estudiante)
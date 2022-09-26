/**
 * Los vectores son una forma particular de trabajar con objetos
 * donde la clave son asignadas directamente con un numero entero
 */

 const materias = ["Programacion","Dibujo","Deporte"];
                //posicion 0     ,   1    ,    2    //


const estudiante = {
    nombre : "Lorena",
    materias: materias 
}

console.log(estudiante)

// Para mostrar la tercer materia que tiene el estudiante se hace:
console.log(estudiante.materias[2])

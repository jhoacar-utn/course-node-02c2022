/* los vectores son una forma particular de trabajr con objetos
donde la clave son asignadas directamente con un numero entero */


const materias =[
    "programacion", // la primer posicion de un vector es la 0
    "dibujo",
    "deporte"
]

const estudiante ={
    nombre: "juan",
    materias: materias
}

console.log(estudiante)

// para mostrar la 3er materia se hace lo siguiente

console.log(estudiante.materias[2])
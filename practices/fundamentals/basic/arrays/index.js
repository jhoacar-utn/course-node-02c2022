/**
 * Los vectores son una forma particular de trabajar con objetos
 * donde la clave son asignadas directamente con un numero entero
 */

const materias = [
    "Programacion", // La primera posicion de un vector (array) es la 0 
    "Dibujo",
    "Deporte"
];

const estudiante = {
    nombre : "Juan",
    materias: materias 
}

console.log(estudiante)

// Para mostrar la tercer materia que tiene el estudiante se hace:
console.log(estudiante.materias[2])

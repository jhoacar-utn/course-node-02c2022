/**Los vectores(ARRAYS) son una forma particular de trabajar con objetos donde la clave son asignadas directamente con un numero entero */

const materias = [
    "programacion", //SIEMPRE la primer posición de un Array es 0
    "Dibujo",
    "Deporte",
];

const estudiante = {
    nombre: "Fernando",
    materias: materias,
};
console.log(estudiante.materias[1]);
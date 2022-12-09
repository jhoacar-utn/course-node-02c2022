/**
 * Los vectores son una forma particular de trabajar con objetos
 * donde la claves son asignadas directamente con un número entero
 */

const materias = [
  'Programación', // La primera posición de un vector (array) es la 0
  'Dibujo',
  'Deporte',
];

const estudiante = {
  nombre: 'Juan',
  materias,
};

// Para mostrar la tercer materia que tiene el estudiante:
console.log(estudiante.materias[2]);

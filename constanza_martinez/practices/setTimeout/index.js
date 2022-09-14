
function mostrarMensaje () {
    console.log('Segundo mensaje');
} 

setTimeout (mostrarMensaje, 1000); //El tiempo se medirá en milisegundos

console.log('Mostrando primer mensaje');
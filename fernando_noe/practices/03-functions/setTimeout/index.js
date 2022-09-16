
function mostrarMsg(){
    console.log("Se muestra como 2do Mensaje despues de 2 segundos");    
}

setTimeout(mostrarMsg, 2000); // El tiempo se mide en Milisegundos, 1000 equivale a 1 segundo!

console.log("Se muestra como 1er mensaje");
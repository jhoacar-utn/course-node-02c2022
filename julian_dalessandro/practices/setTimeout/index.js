function mostrarMensaje(){
    console.log("Segundo mensaje");
}

setTimeout(mostrarMensaje, 1000); //El tiempo se medira en milisegundos

console.log("Primer mensaje");
function mostrarMensaje(){
    console.log("segundo mensaje");
}

setTimeout(mostrarMensaje, 1000);// El tiempo se mide en milisengundos, 1000 igual a 1s

console.log("primer mensaje");

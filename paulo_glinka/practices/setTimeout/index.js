
function mostrarMensaje(){
    console.log("segundo  mensaje")
}

setTimeout(mostrarMensaje,1000) // el tiempo se medira en milisegundos entonces 1000 sera un segundo

console.log("primer mensaje")
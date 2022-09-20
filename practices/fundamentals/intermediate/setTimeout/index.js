
function mostrarMensaje(){
    console.log("Segundo mensaje")
}


setTimeout(mostrarMensaje,1000) // El tiempo se medira en milisegundos, entonces 1000 sera un segundo

console.log("Primer Mensaje")
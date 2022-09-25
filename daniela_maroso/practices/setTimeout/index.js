//establece un temporizador que ejecuta una funcion o una porcion de codigo despues de que transcurra un tiempo establecido//


function mostrarMensaje(){
    console.log("Segundo mensaje")
}


setTimeout(mostrarMensaje,1000)        // El tiempo se mide en milisegundos, entonces 1000 sera 1 segundo

console.log("Primer Mensaje")


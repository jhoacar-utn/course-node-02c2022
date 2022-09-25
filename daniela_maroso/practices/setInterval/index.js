
//es similar al comando setTimeout, pero este lo hace indefinidamente en intervalos, hasta q se ejecute una funcion que lo haga parar//

function mostrarMensaje(){
    console.log("Mostrando")
}

setInterval(mostrarMensaje,1000) // El tiempo es medido en milisegundos
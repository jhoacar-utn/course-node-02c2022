function mostrar(a,b,callback) {

    const resultado=callback(a,b,'mostrando el resultado')
    console.log(resultado);
}


function suma(a,b) {
return a+b    
}

function multiplicacion(a,b) {
    return a*b
    
}


mostrar(20,50,suma)

mostrar(30,30,multiplicacion)
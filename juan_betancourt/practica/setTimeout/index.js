function mostrar_1() {
    console.log('mostar el sagundo mensaje');
}

setTimeout(mostrar_1,4000)

console.log('mostrar el primer mensaje');



function mostrar(a,b,callback) {
    const resultado=callback(a,b,'mostrando el resultado')
    console.log(resultado);
}

function suma(a,b,) {
    return a+b
    
}

function multiplicacion(a,b) {
    return a*b
}

mostrar(80,90,suma)
mostrar(8,8,multiplicacion)
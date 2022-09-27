/**Una Promesa es aquella lógica ejecutada paralelamente alejada a la ejecución principal que será exitosa o errónea */
/*Ej: Decimos que vamos a estudiar el fin de semana (De momento esa promesa está pendiente hasta que se realiza) y puede hacer 2 opciones: 1= Estudia y la promesa dara verdadera --- 2= No estudia y la promesa dara errónea */


/**
 * La Promesa tiene 3 estados:
 * 1) Pending -> Pendiente(Por defecto)
 * 2) Fullfield -> Resuelto
 * 3) Rejected -> Rechazado
 */


/*
console.log("Estoy ejecutando algo");

const promise = new Promise(handlePromise)

console.log(promise);

console.log("ya he ejecutando algo antes");

function handlePromise(resolve, reject){
    console.log("Ejecución de la Promesa");
    setTimeout(()=>{
        console.log("Pasaron 2 segundos");
        resolve("Se resolvió la promesa pasado los 2 segundos")
    },2000)
    //resolve("Ya se ha resuelto la promesa");
    //reject("No se ha resuelto la promesa")
}
*/


const promise = new Promise(handlePromise)

console.log(promise)

promise
    .then((result) => { console.log(result) })
    .catch(error => console.log(error))

function handlePromise(resolve, reject) {

    setTimeout(() => {
        resolve("Ya han transcurrido un segundo")
    }, 1000)

    //reject("Se rechaza la promesa")
}

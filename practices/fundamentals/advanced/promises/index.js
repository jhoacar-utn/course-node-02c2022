/**
 * Una promesa es conocida como aquella logica
 * ejecutada paralelamente o alejada de la ejecucion
 * principal que sera exitosa o que sera con errores 
 * 
 * Una promesa tiene tres estados:
 *  - Pending (pendiente)-> por defecto
 *  - Fullfield (completado, resuelto o exitoso)
 *  - Rejected (rechazado)
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

    reject("Se rechaza la promesa")
}
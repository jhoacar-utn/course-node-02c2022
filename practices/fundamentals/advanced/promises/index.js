/**
 * PROMESAS
 *  
 * Conocida como aquella logica ejecutada paralelamente
 * o lejana a la ejecucion principal
 * Puede ser exitosa o fallara
 */

/**
 * Una promesa tiene tres estados:
 *  - Pending
 *  - Fullfilled
 *  - Rejected
 */

 const promise = new Promise(handlePromise)

 console.log(promise)
 
 promise
     .then((result) => { console.log(result) })
     .catch( error => console.log(error) )
 
 function handlePromise(resolve, reject) {
 
     setTimeout(() => {
         resolve("Ya han transcurrido un segundo")
     }, 1000)
 
    //  reject("Se rechaza la promesa")
 }
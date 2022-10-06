//Una promesa es conocida como aquella logica ejecutada paralelamente o alejada de la ejecucion principal que sera exitosa o erronea 
//Una promesa tiene tres estados:
                                // Pending (pendiente)-> por defecto
                               // Fullfield (completado, resuelto o exitoso)
                              // Rejected (rechazado)
 
// Para controlar las promesas necesitamos invocar dos funciones:

// - .then()    - esta funcion recibe una callback que se ejecutara cuando la promesa se halla RESUELTO
// - .catch()    - esta funcion recibe una callback que se ejecutar cuando la promesa se halla RECHAZADO
 

 const promise = new Promise(handlePromise)

 console.log(promise)
 
 promise
     .then((result) => { console.log(result) })
     .catch(error => console.log(error))
 
 function handlePromise(resolve, reject) {
 
     setTimeout(() => {
         resolve("Ya han transcurrido dos segundo")
     }, 2000)
 
     reject("Se rechaza la promesa")
 }
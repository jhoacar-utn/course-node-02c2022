/* una promesa es conocida como aquella logica ejecutada paralelamente q sera exitosa o con errores
una promesa tiene tres estados pending por defecto, fullfield q seria resuelto, rejected seria rechazado
para controlar las teorias necesitamos dos funciones: 
.then() esta funcion recibe una callback q se ejecutara cunado la promesa se halla resuelto 
.catch esta funcion recibe una callback q se ejecutara cunado la promesa se halla rechazado*/

/* console.log("estoy ejecutando algo")


const promesa = new Promise(handlePromise)

console.log(promesa)

console.log("ya lo ejecute")

function handlePromise(resolve,reject){
    console.log("esto es la promesa")
    setTimeout(()=>{
        console.log("ya pasaron 5 sec")
        resolve("todo fue bien")

    },5000)
} */

const promise = new Promise(handlePromise)

console.log(promise)

promise
    .then((result) => { console.log(result) })
    .catch( error => console.log(error) )

function handlePromise(resolve, reject) {

    setTimeout(() => {
        resolve("Ya han transcurrido un segundo")
    }, 1000)

    reject("Se rechaza la promesa")
}
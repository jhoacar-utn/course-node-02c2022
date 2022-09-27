function sleep(miliseconds) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, miliseconds)
    })
}

async function main() {

    /**
    * Uso de .then() y .catch()
    * 
    * Es para manejar las promesas
    * - .then() -> para cuando la promesa es exitosa
    * - .catch() -> para cuando la promesa es rechazada
    */
    console.log("\n[+] Ejecutando codigo sincrono")

    sleep(1000)
        .then(() => console.log("\n\tHa pasado un segundo (sincronamente)"))
        .catch(error => console.log(error))

    console.log("\n[+] Terminada la ejecucion del codigo sincrono")

    /**
    * Uso de async y await (si se usa 'await', si o si la funcion debe ser 'async')
    * - Nota: todas las funciones 'async' devuelven promesas
    */

    console.log("\n[+] Ejecutando codigo asincrono")
    
    try {
        await sleep(5000)
        console.log("\n\tHan pasado cinco segundos (asincronamente)")
    } catch (error) {
        console.log(error)
    }

    console.log("\n[+] Terminada la ejecucion del codigo asincrono")
}

main()


function sleep(miliseconds) {                                //fn sleep, devuelve una promesa pasado cierto tiempo
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, miliseconds)
    })
}

async function main() {                             //Para manejar las promesas: 
                                                                               // .then() ->  promesa exitosa
                                                                              // .catch() ->  promesa rechazada
    console.log("\n[+] Ejecutando codigo sincrono")

    sleep(1000)                                                                     
        .then(() => console.log("\n\tHa pasado un segundo (sincronamente)"))
        .catch(error => console.log(error))

    console.log("\n[+] Terminada la ejecucion del codigo sincrono")


//Uso de async-await: (freno el codigo hasta q la promesa responda) si se usa 'await', si o si la funcion debe ser 'async'  
//todas las funciones 'async' devuelven promesas

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


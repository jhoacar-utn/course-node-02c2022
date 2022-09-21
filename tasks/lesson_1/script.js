const MAX_NUMBER_BOXES = 4
const COIN_ID = "coin_"
const MULTIPLIER_ID = "multiplier_"
const RESPONSE_ID = "response_"
const TOTAL_ID = "response_total"
const BUTTON_ID = "calculate"

/**
 * Funcion encargada de extraer la informacion
 * del DOM para las monedas y los multiplicadores
 * @return object
 */
function getDataFromDOM() {

    const coins = []
    const multipliers = []

    for (let number = 1; number <= MAX_NUMBER_BOXES; number++) {

        /**
         * Template String
         * "" , ''
         * `ejemplo de codigo: ${variable}`
         * "ejemplo de codigo: " + variable
         */
        const coin = document.getElementById(`${COIN_ID}${number}`)
        const multiplier = document.getElementById(`${MULTIPLIER_ID}${number}`)

        /**
         * parseInt("18") == 18
         * parseInt("hola") == NaN (Not A Number)
         */
        coin && !isNaN(parseInt(coin.value)) && coins.push(coin.value)
        multiplier && !isNaN(parseInt(multiplier.value)) && multipliers.push(multiplier.value)
    }

    return {
        coins,
        multipliers
    }
}

function setSolutionInDOM() {

    const { coins, multipliers } = getDataFromDOM()

    /**
     * Como dato curioso si es una sola linea de codigo,
     * no sera necesaria la apertura y cierre de llaves
     * 
     * for(let index=0;index<algo;index++)
     *  console.log(index)
     */
    if (coins.length !== multipliers.length)
        return alert("La cantidad de monedas debe ser igual a la cantidad de multiplicadores")

    const solution = getCorrectMultipliers(coins, multipliers)
    const total = getTotalFromCoinsAndMultiplier(coins, solution)

    for (let number = 1; number <= MAX_NUMBER_BOXES; number++) {

        const response = document.getElementById(`${RESPONSE_ID}${number}`)

        if (response) {
            response.value = solution[number - 1]
        }
    }

    const totalElement = document.getElementById(TOTAL_ID)
    if (totalElement) {
        totalElement.value = total
    }
}


document.getElementById(BUTTON_ID)?.addEventListener("click", setSolutionInDOM)


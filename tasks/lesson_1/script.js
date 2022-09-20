const MAX_NUMBER = 4
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

    for (let number = 1; number <= MAX_NUMBER; number++) {

        const coin = document.getElementById(`${COIN_ID}${number}`)
        const multiplier = document.getElementById(`${MULTIPLIER_ID}${number}`)


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

    if (coins.length !== multipliers.length)
        return alert("La cantidad de monedas debe ser igual a la cantidad de multiplicadores")

    const solution = getCorrectMultipliers(coins, multipliers)
    const total = getTotalFromCoinsAndMultiplier(coins, solution)

    for (let number = 1; number <= MAX_NUMBER; number++) {

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


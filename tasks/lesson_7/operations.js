const sum = function (...nums) {

    let total = 0

    nums.map(number => total += number)

    return total
}

module.exports = {
    sum
}
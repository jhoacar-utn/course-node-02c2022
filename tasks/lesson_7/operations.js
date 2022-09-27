const sum = function (...nums) {
    const total = 0

    for (let index = 0; index < nums.length; index++)
        total += nums[index]

    return total
}

module.exports = {
    sum
}
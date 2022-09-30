const sum = function (...nums) {

<<<<<<< HEAD
    //const total = 0
=======
>>>>>>> 0e4c70095344ebe691c919bd0dfd66ebabef3da8
    let total = 0

    nums.map(number => {
        
        if(isNaN(parseInt(number)))
            throw new Error("Los parametros deben ser numeros")
        
        total += parseFloat(number)
    })

    return total
}

module.exports = {
    sum
}
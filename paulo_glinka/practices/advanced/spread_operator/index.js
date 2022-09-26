/**
 * El Spread Operator, se utiliza basicamente
 * para la obtencion de todas las propiedades o valores
 * de un objeto
 */

/** 
 * Al sacar todos los argumentos y guardarlos
 * en una variable, esta variable se convierte en
 * un vector
 */ 

function suma(...nums){
    
    let sum = 0
    for(let index=0; index<nums.length; index++){
        sum = sum + nums[index]
    
}
return sum
}

console.log(suma(1,2,3,5,7))


/**
 * Otro uso del spread operator
 * aparte de las funciones, es con los objetos
 */ 

const Estudiante = {
    name: "nombre por defeccto",
    study: function(){
        console.log(this.name+" esta estudiando")
    }
}
const sofia = {...Estudiante, name: "Sofia" }
console.log(sofia)
sofia.study()

/**
 * Otro uso del spread operator
 * aparte de las funciones y de los objetos, puede
 * ser con los arrays
 */

const notas =  [1,8,7,2]
console.log(notas)
const otrasNotas = [...notas, 9]
console.log(otrasNotas)
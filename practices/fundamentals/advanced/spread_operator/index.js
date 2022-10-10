/**
<<<<<<< HEAD
 * El spread operator se utiliza para la obtencion de todas
 *  las propiedades o valores de un objeto
 */

/**
 * Esta forma nos permite crear una funcion sin una cantidad fija de parametros
 */

function suma(...nums) {
    let sum = 0;
    for(let index = 0; index < nums.length; index++){
        sum = sum + nums[index];
    }
    return sum
}

console.log(suma(1, 2, 5, 7))

/**
 * Otro uso de spread operators es con objetos
 */

const Estudiante = {
    name: "", 
    study: function(){
        console.log(this.name + " esta estudiando");
    }
}

const sofia = { ...Estudiante, name: "Sofia" };

console.log(sofia);

/**
 * Otro uso del spread operator es con para los arrays
 */

const notas = [1, 5, 4, 3]

//Este array tiene la info del array notas, mas el nro. 9
const otrasNotas = [...notas, 9]

console.log(notas)
=======
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
/**
 * Esta forma de crear funciones, me permite agregar
 * la cantidad de parametros que se deseen
 */
console.log(suma(1,1,2,5,1))

/**
 * Otro uso del spread operator
 * aparte de las funciones, es con los objetos
 */

const Estudiante = {
    name: "nombre por defecto",
    study: function(){
        console.log(this.name+" esta estudiando")
    }
}

const sofia = { ...Estudiante, name: "sofia"}

console.log(sofia)

sofia.study()

/**
 * Otro uso del spread operator
 * aparte de las funciones y de los objetos, puede
 * ser con los arrays
 */

const notas = [1,5,4,3]

console.log(notas)

const otrasNotas = [ 8 , ...notas , 9]

>>>>>>> 0d5c26ccf3da389091a938868b2e5799e45d6eb1
console.log(otrasNotas)
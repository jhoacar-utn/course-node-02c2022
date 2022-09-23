/**
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
console.log(otrasNotas)
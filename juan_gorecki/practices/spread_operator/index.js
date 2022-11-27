/* spread operator, se utiliza para la obtencion de todas las propiedades o valores de un objeto */


// al sacar todos los argumentos y guardarlos en una variable, esta variable se convierte en un vector
function suma(...nums){
    let sum = 0
    for(let index=0; index<nums.length; index++){
        sum = sum + nums[index]
    }
    return sum
}

/* esta forma de crear funcinoes, me permite agregae la cantidad de parametros que desee */
console.log(suma(1,2,5,7))


/* otro use de spread operator aparte de funciones es con objetos */

const estudiante = {
    name: "nombre por defecto",
    study: function(){
        console.log(this.name+ "esta estudiando")
    }

}
const sofia = {...estudiante, name:"sofia"}

console.log(sofia)

sofia.study

/* otro uso de spread operator aprte de funciones y objetos puede ser con los arrays */

const notas = [1,5,4,3]

const otrasNotas = [8, ...notas, 9]
console.log(otrasNotas)


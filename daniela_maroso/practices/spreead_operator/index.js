// * El Spread Operator se utiliza para la obtencion de todas las propiedades o valores de un objeto//

//Extrae todos los argumentos y guardarlos en una variable que se convierte en un vector//
//Uso con funciones//

 function suma(...nums){
    let sum = 0
    for(let index=0; index<nums.length; index++){   //empiezo de la posicion 0, recorro toda su longitud, iterando de a uno//
        sum = sum + nums[index]
    }
    return sum
}

console.log(suma(1,7,2,5,3))                 //de esta forma se crean fns q permiten agregar la cantidad de parametros que se deseen//


//Uso con objetos//

const Estudiante = {
    name: "nombre por defecto",
    study: function(){
        console.log(this.name+" esta estudiando")
    }
}

const sofia = { ...Estudiante, name: "sofia"}

console.log(sofia)

sofia.study()


///Uso con arrays//

const notas = [1,5,4,3]

console.log(notas)

const otrasNotas = [ 8 , ...notas , 9]

console.log(otrasNotas)                      //[8,1,5,4,3,9]


//CLASSES: es una sintaxis más clara y simple para crear objetos y lidiar con la herencia.//

class Estudiante{
    name
    estudiar(){
        console.log(this.name+" esta estudiando")  //otra sintaxis para el log//
    }
    constructor(name){                           // metodo para crear e inicializar un objeto creado a partir de una clase 
        this.name = name
    }
}


const sofia = new Estudiante("sofia")
console.log(sofia)

const pedro = new Estudiante("pedro")
console.log(pedro)


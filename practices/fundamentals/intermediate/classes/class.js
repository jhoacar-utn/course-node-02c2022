class Estudiante{
    name
    estudiar(){
        console.log(this.name+" esta estudiando")
    }
    constructor(name){
        this.name = name
    }
}


const sofia = new Estudiante("sofia")
console.log(sofia)

const pedro = new Estudiante("pedro")
console.log(pedro)
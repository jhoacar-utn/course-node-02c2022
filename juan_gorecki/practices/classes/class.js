class estudiante{
    name
    estudiar(){
        console.log(this.name+"esta estudiando")
    }
    constructor(name){
        this.name = name
    }
}

const sofia = new estudiante("sofia")
console.log(sofia)


const pedro = new estudiante("pedro")
console.log(pedro)
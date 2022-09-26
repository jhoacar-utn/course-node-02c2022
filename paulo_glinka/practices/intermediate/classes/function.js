function Estudiante(name){
    this.name = name
    this.study = ()=>{
        console.log(name+ "esta estudiando")
    }
}

const sofia = new Estudiante("Sofia")
console.log(sofia)
sofia.study()

const pedro = new Estudiante("Pedro")
console.log(pedro)
pedro.study()
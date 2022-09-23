class Estudiante {
    name
    estudiar(){
        console.log(this.name + "esta estudiando")
    }
    constructor(name){
        this.name = name;
    }
}

const sofia = new Estudiante("Sofia");
console.log(sofia);
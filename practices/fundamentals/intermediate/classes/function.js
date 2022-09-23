function Estudiante(name){
    this.name = name
    this.study = ()=>{
        console.log(this.name + " esta estudiando"); 
    }
}

const sofia = new Estudiante("Sofia");
console.log(sofia);
sofia.study();
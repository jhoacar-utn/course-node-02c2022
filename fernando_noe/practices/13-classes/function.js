/**Vamos a crear un objeto o una clase a partir de una funcion */
//Es la forma en que se utiliza actualmente

function Estudiante(name){
    this.name = name
    this.study = ()=> { console.log(name + " está estudiando")}
}

const sofia = new Estudiante("Sofía");

console.log(sofia)
sofia.study()
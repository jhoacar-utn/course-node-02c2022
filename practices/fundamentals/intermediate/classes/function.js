<<<<<<< HEAD
function Estudiante(name){
    this.name = name
    this.study = ()=>{
        console.log(this.name + " esta estudiando"); 
    }
}

const sofia = new Estudiante("Sofia");
console.log(sofia);
sofia.study();
=======
function Estudiante(name,email,password){
    this.name = name
    this.email = email
    this.password = password
    this.study = ()=>{
        console.log(name+" esta estudiando")
    }
    this.saveInDataBase = ()=>{
        console.log("Guardando este objeto en base de datos")
    }
}

const sofia = new Estudiante("sofia","sofia@gmail.com","1234")
sofia.saveInDataBase()
console.log(sofia)
sofia.study()

const pedro = new Estudiante("pedro")
console.log(pedro)
pedro.study()

const juan = new Estudiante("juan")
>>>>>>> 0d5c26ccf3da389091a938868b2e5799e45d6eb1

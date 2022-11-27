function estudiante(name,email,password){
    this.name = name
    this.email = email
    this.password = password
    this.study = ()=>{
        console.log(name+ "esta estudiando")
    }
    this.saveInDataBase = ()=>{
        console.log("guardado objeto en base de datos")
    }
}

const sofia  = new estudiante("sofia","sofia@gmail.com","1234")
sofia.saveInDataBase()
console.log(sofia)
sofia.study()

const pedro  = new estudiante("pedro")
console.log(pedro)
pedro.study()
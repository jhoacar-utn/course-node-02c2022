//creamos una clase a partir de una funcion// 

function Estudiante(name,email,password){                       // la diferencia con la creacion de objetos es que primero creo la estructura 
                                                               // y despues los objetos (al revez que al crear un objeto directamente)
    this.name = name
    this.email = email
    this.password = password
    this.study = ()=>{
        console.log(name+" esta estudiando")
    }
    this.saveInDataBase = ()=>{                                    //para guardar en la base de datos
        console.log("Guardando este objeto en base de datos")
    }
}

const sofia = new Estudiante("sofia","sofia@gmail.com","1234")
sofia.saveInDataBase()
console.log(sofia)
sofia.study()

const pedro = new Estudiante("pedro", "pedro@gmail.com","0397")
console.log(pedro)
pedro.study()

const juan = new Estudiante("juan", "juan@gmail.com","5678")       // con esta fn puedo agregar variables al que le se aplicaran los atributos de la fn 
                                                                  // y se guardan en la base de datos 

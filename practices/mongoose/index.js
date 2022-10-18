const mongoose = require('mongoose');

const uri = "mongodb://utn:utn@localhost:27017/utn";

async function main() {

    await mongoose.connect(uri);
    console.log("conexion exitosa");

    const userSchema = new mongoose.Schema({
        name: String,
        password: String,
        email: String,
        age: Number
    });

    const User = mongoose.model('User', userSchema);

    // const pedro = new User({
    //     name: "pedro",
    //     password: "pedro123",
    //     email: "pedro@gmail.com",
    //     age: 20
    // });

    // await pedro.save();


    await User.create({
        name: "pedro",
        password: "pedro123",
        email: "pedro@gmail.com",
        age: 20
    })

    console.log("La informacion de pedro ha sido guardada");
}

main()
//     .catch((error) => {
//         console.log("Un error ha ocurrido: ", error.message)
//     })


const mongoose = require('mongoose');

const uri = "mongodb://utn:utn@localhost:27017/utn";

async function main() {
    await mongoose.connect(uri);
    console.log("conexion exitosa");
}

main()
    .catch((error) => {
        console.log("Un error ha ocurrido: ", error.message)
    })

const toDoSchema = new mongoose.Schema({
    title: String,
    text: String,
});

const ToDo = mongoose.model('Todo', toDoSchema);

module.exports = ToDo;

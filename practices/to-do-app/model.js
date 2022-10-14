const mongoose = require('mongoose');

const uri = process.env.DB_URI;

console.log(uri);

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

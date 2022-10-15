const mongoose = require('mongoose');

const uri = process.env.DB_URI;

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
    importance: Number,
});

const ToDo = mongoose.model('Todo', toDoSchema);

module.exports = ToDo;

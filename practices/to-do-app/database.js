const mongoose = require('mongoose');

const uri = process.env.DB_URI;

async function connection() {
    await mongoose.connect(uri);
    console.log("conexion exitosa");
}

module.exports = connection;
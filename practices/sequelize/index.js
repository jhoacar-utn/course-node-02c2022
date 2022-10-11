const { Sequelize } = require('sequelize');

const uri = "mysql://root:root@localhost:3306/utn";

const sequelize = new Sequelize(uri);

async function main() {
    try {
        await sequelize.authenticate();
        console.log("Conexion establecida")
    } catch (error) {
        console.log("Un error ha ocurrido: ", error.message);
    }
}

main();
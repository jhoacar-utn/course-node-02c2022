const { Sequelize, DataTypes } = require('sequelize');

const uri = "mysql://root:root@localhost:3306/utn";

const sequelize = new Sequelize(uri);


async function main() {
    try {
        await sequelize.authenticate();
        console.log("Conexion establecida");

        const userSchema = {
            // Model attributes are defined here
            name: {
                type: DataTypes.STRING,
            },
            password: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            },
            age: {
                type: DataTypes.INTEGER
            }
        }

        const User = sequelize.define('user', userSchema);

        await User.sync(); // Este metodo es usado para crear la tabla
        // Si la tabla no existe, arrojara un error

        await User.create({
            name: "pedro",
            password: "pedro123",
            email: "pedro@gmail.com",
            age: 20
        });

        console.log("La informacion de pedro ha sido guardada");

    } catch (error) {
        console.log("Un error ha ocurrido: ", error.message);
    }
}

main();
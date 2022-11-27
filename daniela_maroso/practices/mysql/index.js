const mysql = require('mysql');

/**
 * Una URI de conexion para mysql podria ser la siguiente:  mysql://root:root@localhost:3306/utn
 */
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "utn",
    password: "utn",
    database: "utn"
});

connection.connect(function (error) {
    if (error) {
        throw new Error("Un error ha ocurrido: "+error.message);
    } else {
        console.log("Conexion exitosa");
        connection.query("SELECT * FROM ejemplo",function(error,result,fields){
            if(error){
                throw new Error("Ha ocurrido un error en la consulta: "+error.message);
            }else{
                console.log("Este ha sido el resultado de la consulta hacia la tabla 'ejemplo' de la base de datos de 'utn'");
                console.log(result);
            }
        })
    }
});
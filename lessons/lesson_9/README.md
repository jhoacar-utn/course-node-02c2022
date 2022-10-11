# Contenidos de la clase

* Patron de Diseño MVC (Modelo - Vista - Controlador)

    * Concepto de Rutas

        ```javascript
        const express = require("express")
        const app = express()

        app.get("/welcome", (request,response,next)=>{
            return response.send("<h1>Hola desde el servidor</h1>")    
        })

        /**
         * Podemos usar la logica de rutas para separar
        * un poco mas la responsabilidad de la aplicacion
        * de generar todas las rutas, para ello hacemos uso
        * de un objeto llamado Router directamente de express con 'express.Router()'
        */
        const router = express.Router()

        router.get("/",(req,res,nxt)=>{
            console.log("Estoy en la raiz de este enrutador")
        })

        router.get("/cosa",(req,res,next)=>{
            console.log("Estoy en cosa del router")
        })

        app.use("/otra",router)

        module.exports = app
        ```

    * Concepto de Middleware
        
        ```javascript
        const express = require("express")
        const app = express()
        
        function middleware(!request,response,next){
            if(request.query.name){
                return response.send("<h1>Se necesita un nombre en la query de la URL</h1>")
            }
            return next() // Con el uso de la funcion next() podemos manipular el flujo de las funciones que se invoquen en la funcion .use() o .get() o cualquiera que se haya definido
        }

        function controlador(request,response,next){
            return response.send("<h1>Hola desde el servidor</h1>")    
        }

        const ruta = "/welcome"

        app.get(ruta, middleware, controlador)

        module.exports = app
        ```

    * Concepto de Controlador
        
        ```javascript
        const express = require("express")
        const app = express()
        
        function controlador(request,response,next){
            return response.send("<h1>Hola desde el servidor</h1>")    
        }
        const ruta = "/welcome"

        app.get(ruta, controlador)

        module.exports = app
        ```


    * Concepto de Vista

        * `view.html`
            ```html
            <head>
                <title>Vista</title>
            </head>
            <body>
                <h1>Hola desde el servidor</h1>
            </body>
            ```

        * `server.html`
            ```javascript
            const express = require("express")
            const app = express()
            
            function controlador(request,response,next){
                /**
                 * El controlador sera el encargado de comunicarse
                * con el modelo o realizar cualquier otra logica
                * para asi posteriormente mandar la vista
                */
                return response.sendFile(__dirname+"/view.html")    
            }
            const ruta = "/welcome"

            app.get(ruta, controlador)

            module.exports = app
            ```

    * Concepto de Modelo

        * Ejemplo de modelo basico:

            ```javascript
            const express = require("express")
            // Libreria 'fs' (file system) es para manipular los archivos del sistema
            const fs = require("fs")
            const app = express()

            function Modelo(data) {
                /**
                * Guardamos la variable que nos viene en la creacion de nuestro objeto (contexto o entorno)
                * Y le añadimos un salto de linea para que sea linea por linea
                */
                this.datos = data + "\n"
                /**
                * Esta funcion guardara los datos en la maquina en un archivo llamado 'data.txt'
                */
                this.guardar = () => {
                    fs.appendFile('data.txt', this.datos, (error) => {
                        if (error)
                            console.log("Ha ocurrido un error: ", error.message)
                        else
                            console.log('Guardado satisfactoriamente: ', this.datos);
                    });
                }
            }

            function controlador(request, response, next) {
                const nombre = request.query.name || "desconocido"

                // Vamos a contruir un nuevo modelo para guardar nuestra informacion
                const nuevoUsuario = new Modelo(nombre)
                // Luego invocamos el metodo para guardar esta informacion
                nuevoUsuario.guardar()

                return response.send(`<h1>Hola, se ha guardado tu nombre: ${nombre}</h1>`)
            }
            const ruta = "/welcome"

            app.get(ruta, controlador)

            module.exports = app
            ```

        * Para usar una forma mas optima y segura de guardar la informacion tendremos que hacer uso de base de datos
            * Base de Datos Relacionales (SQL - Structure Query Language)
                * Podemos encontrar varios gestores de este tipo de base de datos como lo son:
                    * MySQL
                    * PostgreSQL
                    * SQL Server
                    * Oracle
                    * Microsoft Access
                    * ...
                * Las caracteristicas de estos gestores de base de datos son las siguientes:
                    * Cada base de dato tendra un conjunto de tablas
                    * Cada tabla tendra sus correspondientes filas y columnas
                        * La columna representara el campo a guardar (key)
                        * La fila representara la informacion del campo guardado (value)
            * Base de Datos No Relacionales (NoSQL - No Structure Query Language)
                * Podemos encontrar varios gestores de este tipo de base de datos como lo son:
                    * MongoDB
                    * DynamoDB
                    * Cassandra
                    * Redis
                    * CouchDB
                    * ...
                * Las caracteristicas de estos gestores de base de datos son las siguientes:
                    * Cada base de dato tendra un conjunto de colecciones
                    * Cada colecciones tendra sus correspondientes indices y documentos
                        * El indice representara el campo a guardar (key)
                        * El documento representara la informacion del campo guardado (value)
        * Para levantar los servicios (sockets) de base de datos en nuestra maquina local, lo haremos usando `Docker` con el comando `docker-compose up -d` para ejecutar el archivo de `docker-compose.yml` que aparece en la raiz del repositorio
            
            * `docker-compose.yml`

            ```yml
            version: '3'

            services:

            mysql:
                image: mysql:5.7.39
                container_name: mysql
                restart: always
                command: --default-authentication-plugin=mysql_native_password
                ports:
                    - 3306:3306
                environment:
                    MYSQL_ROOT_PASSWORD: root
                volumes:
                    - mysql_utn:/var/lib/mysql
                    # Este volumen es para darle un archivo a ejecutar al iniciar este servicio
                    - ./docker/mysql:/docker-entrypoint-initdb.d:ro
                
            phpmyadmin:
                image: phpmyadmin/phpmyadmin:5.2.0
                container_name: phpmyadmin
                restart: always
                ports:
                    - 8080:80
                environment:
                    PMA_HOST: mysql
                    PMA_PORT: 3306
                depends_on:
                    - mysql

            mongo:
                image: mongo:4.4-focal
                container_name: mongo
                restart: always
                ports: 
                    - 27017:27017
                environment:
                    MONGO_INITDB_ROOT_USERNAME: root
                    MONGO_INITDB_ROOT_PASSWORD: root
                volumes:
                    - mongo_utn:/data/db
                    # Este volumen es para darle un archivo a ejecutar al iniciar este servicio
                    - ./docker/mongo:/docker-entrypoint-initdb.d:ro 

            mongo_express:
                image: mongo-express:1.0.0-alpha.4
                container_name: mongo_express
                restart: always
                ports:
                    - 8081:8081
                environment:
                    ME_CONFIG_MONGODB_URL: mongodb://root:root@mongo:27017
                depends_on:
                    - mongo

            volumes:
                mongo_utn:
                    external: false 
                mysql_utn:
                    external: false 
            ```

        * Ejecutado el comando `docker-compose up -d` vamos a poder visualizar dos servicios para ver nuestros gestores de base de datos, en nuestro caso, tendremos dos, `MySQL` y `MongoDB`
            * Para visualizar nuestro `MySQL` iremos a nuestro `PHPMyAdmin` que se encuentra en [http://localhost:8080](http://localhost:8080)
                * Una vez en el navegador usaremos el usuario `utn` y contraseña `utn` para navegar en las bases de datos
            * Para visualizar nuestro `MongoDB` iremos a nuestro `MongoExpress` que se encuentra en [http://localhost:8081](http://localhost:8081)
                * Una vez en el navegador no sera necesario proporcionar credenciales ya que por defecto se puede tener acceso general y controlar esta base de datos
        * Estos pasos que hicimos solo fueron utiles para poder tener en ejecucion los dos gestores de bases de datos y sus correspondientes visualizadores web que eran `phpmyadmin` y `mongoexpress`, ahora tendremos que conectarnos a estas dos bases de datos pero usando codigo de `NodeJS`, para ello usaremos dos librerias correspondientes a cada tipo de base de datos
            * SQL - para este caso usaremos un ORM (Object Relational Mapping)
                * [Sequelize](https://sequelize.org/docs/v6/getting-started/)
                    * Para la instalacion debemos realizar los siguientes pasos
                        * `npm i sequelize`
                        * `npm i mysql2` - Esta libreria es necesaria debido a que usaremos conexion a `MySQL`
                    * Para la conexion haremos uso de lo que nos comenta en la documentacion oficial
                        * `sequelize.js`
                            ```javascript
                            const { Sequelize } = require('sequelize');
                            /**
                             * Para conectarnos a una base de datos, lo podemos
                            * hace proporcionando una URI de conexion que tendra que
                            * tener la siguiente estructura
                            *  
                            * - protocolo://usuario:contraseña@dominio:puerto/base_de_datos
                            * 
                            * protocolo: mysql, mongodb, postgress, ...
                            * usuario: el usuario de la conexion
                            * contraseña: la contraseña del usuario para la conexion
                            * dominio: Puede ser un nombre de dominio o un direccion IP
                            * puerto: Donde se encuentra escuchando este servicio
                            *          MySQL -> 3306 (puerto por defecto)
                            * base_de_datos: La base de datos que sera usada para la conexion
                            */
                            const uri = "mysql://utn:utn@localhost:3306/utn"
                            const sequelize = new Sequelize(uri)
                            
                            async function connection(){
                                try {
                                    await sequelize.authenticate();
                                    console.log('La conexion ha sido exitosa');

                                } catch (error) {
                                    console.error('No es posible conectarse debido a un error: ', error.message);
                                }
                            }

                            connection()
                            ```

                    * Para extraer la informacion de la base de datos tenemos que agruparlo en modelos
                        * `ejemplo.js`

                            ```javascript
                            const { Sequelize, DataTypes } = require('sequelize');

                            const uri = "mysql://utn:utn@localhost:3306/utn"
                            const sequelize = new Sequelize(uri)

                            async function getData() {
                                try {
                                    await sequelize.authenticate();
                                    console.log('\n\tLa conexion ha sido exitosa\n');

                                    /**
                                    * Para poder realizar consultas usando Sequelize
                                    * debemos pensar todo directamente como modelos
                                    * donde el nombre de la tabla sera la entidad con los datos
                                    * Sus propiedades seran cada una de las columnas 
                                    * Y sus valores, las correspondientes filas
                                    */
                                const ExampleSchema =  {
                                        mensaje: {
                                            type: DataTypes.STRING,
                                        },

                                    }

                                    const Example = sequelize.define("ejemplo", ExampleSchema, {
                                        tableName: 'ejemplo', // Esto le especifica que tabla debe usar
                                        timestamps: false // Esto quitara de la consulta las columnas 'createdAt' y 'updatedAt'
                                    })

                                    Example.removeAttribute('id'); // Esto quitara de la consulta la columna por 'id'

                                    const resultado = await Example.findAll();

                                    console.log("\nMostrando el contenido de la tabla 'ejemplo'")

                                    // Iteramos por cada fila
                                    resultado.map(fila => {
                                        console.log("\nMostrando el contenido de la columna 'mensaje'")
                                        console.log("\n\t"+fila.mensaje)
                                    })

                                    // Detenemos el programa con 0 errores
                                    process.exit(0)

                                } catch (error) {
                                    console.error('No es posible conectarse debido a un error: ', error.message);
                                }
                            }

                            getData()
                            ```


            * NoSQL - para este caso usaremos un ODM (Object Documents Mapping)
                * [Mongoose](https://mongoosejs.com/docs/)
                    * Para la instalacion debemos realizar los siguientes pasos
                        * `npm i mongoose`
                    * Para la conexion haremos uso de lo que nos comenta en la documentacion oficial
                        * `mongoose.js`
                            ```javascript
                            const mongoose = require('mongoose');
                            /**
                             * Para conectarnos a una base de datos, lo podemos
                            * hace proporcionando una URI de conexion que tendra que
                            * tener la siguiente estructura
                            *  
                            * - protocolo://usuario:contraseña@dominio:puerto/base_de_datos
                            * 
                            * protocolo: mongodb, mysql, postgress, ...
                            * usuario: el usuario de la conexion
                            * contraseña: la contraseña del usuario para la conexion
                            * dominio: Puede ser un nombre de dominio o un direccion IP
                            * puerto: Donde se encuentra escuchando este servicio
                            *          MongoDB -> 27017 (puerto por defecto)
                            * base_de_datos: La base de datos que sera usada para la conexion
                            */
                            const uri = "mongodb://utn:utn@localhost:27017/utn"
                            
                            async function connection(){
                                try {
                                    await mongoose.connect(uri);
                                    console.log('La conexion ha sido exitosa');

                                } catch (error) {
                                    console.error('No es posible conectarse debido a un error: ', error.message);
                                }
                            }

                            connection()
                            ```
                    * Para extraer la informacion de la base de datos tenemos que agruparlo en modelos
                        * `ejemplo.js`

                            ```javascript
                            const mongoose = require('mongoose');

                            const uri = "mongodb://utn:utn@localhost:27017/utn"

                            async function getData() {
                                try {
                                    await mongoose.connect(uri);
                                    console.log('\n\tLa conexion ha sido exitosa\n');

                                    /**
                                    * Para poder realizar consultas usando Mongoose
                                    * debemos pensar todo directamente como modelos
                                    * donde el nombre de la coleccion sera la entidad con los datos
                                    * Sus propiedades seran cada una de los indices
                                    * Y sus valores los correspondientes documentos
                                    */
                                    const ExampleSchema = new mongoose.Schema({
                                        mensaje: String
                                    }, {
                                        collection: 'ejemplo', // Esto le especifica que coleccion debe usar
                                        timestamps: false // Esto quitara de la consulta los campos 'created_at' y 'updated_at'
                                    });

                                    const Example = mongoose.model('ejemplo', ExampleSchema);

                                    const resultado = await Example.find();

                                    console.log("\nMostrando el contenido de la coleccion 'ejemplo'")

                                    // Iteramos por cada documento
                                    resultado.map(documento => {
                                        console.log("\nMostrando el contenido del campo 'mensaje'")
                                        console.log("\n\t" + documento.mensaje)
                                    })

                                    process.exit(0) // Detenemos el programa

                                } catch (error) {
                                    console.error('No es posible conectarse debido a un error: ', error.message);
                                }
                            }

                            getData()
                            ```

* Uso de un servidor por `https`
    * Encriptacion de todas las peticiones y respuestas realizadas
    * Pasos a realizar
        * Generar un certificado
            * Usando `openssl` con la herramienta de `Docker` (powershell)

            * Creando una clave privada y un certificado autofirmado para el SSL
            
                ```
                docker run --rm -it -v ${PWD}:/ssl alpine/openssl req -x509 -newkey rsa:4096 -keyout /ssl/key.pem -out /ssl/cert.pem -sha256 -days 365 -nodes
                ```

        * Luego de generado el certificado debemos integrarlos al proyecto

            ```javascript
            const https = require('https')
            const fs = require('fs')
            const app = require("express")()

            const httpPort = 8888
            const httpsPort = 8443

            app.listen(httpPort,()=>{
                console.log(`Servidor escuchando en http://localhost:${httpPort}`)
            })

            // Estas opciones son requeridas para incluir el certificado
            const options = {
                key: fs.readFileSync(__dirname+'/key.pem'),
                cert: fs.readFileSync(__dirname+'/cert.pem')
            };

            // Crea un servicio HTTPS identico al servicio HTTP.
            const secureApp = https.createServer(options, app)
            
            secureApp.listen(httpsPort,()=>{
                console.log(`Servidor escuchando en https://localhost:${httpsPort}`)
            });

            ```

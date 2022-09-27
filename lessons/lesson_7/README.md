# Contenidos vistos en clase:

* Uso de `npm` (Node Package Manager - Manejador de Paquetes de Node)
    * Instalacion de paquetes (`npm install package@version` o `npm i package@version`)
        * Paquetes de produccion (`dependencies`) y paquetes de desarrollo (`devDependencies`)
        * Carpeta `node_modules` (Todos los modulos o librerias descargados)
        * `package.json` (Configuracion del proyecto en formato JSON - Javascript Object Notation)
            * Uso de [versionado semantico](https://fperez217.medium.com/qu%C3%A9-es-versionamiento-sem%C3%A1ntico-bf495b9eb028) - [video](https://www.youtube.com/watch?v=hwlOuZvaDIA) - [Packagist Semver Checker](https://semver.madewithlove.com/?package=madewithlove%2Fhtaccess-cli&constraint=dev-main&stability=stable)
        * `package-lock.json` (Configuracion final del proyecto con dependencias finales instaladas)
    * Scripts para la ejecucion con `node`
        * Uso de `npm start` o `npm run start`
            ```json
            {
                "scripts":{
                    "start": "node ."
                }
            }
            ```
        * Uso de `npm test` o `npm run test`
            ```json
            {
                "scripts":{
                    "test": "jest"
                }
            }
            ```
* Instalacion de `express` usando `npm` (`npm install express` o `npm i express`)
    * Uso de dos ficheros para la creacion del servidor
        * `server.js` - Configuracion del servidor

            ```javascript
            const express = require("express")

            const app = express()

            module.exports = app
            ```

        * `index.js` - Archivo con la inicializacion del servidor

            ```javascript
            const app = require("./server")

            const port = 8888
            app.listen(port,()=>{
                console.log(`Servidor escuchando en http://localhost:${port}`)
            })
            ```

    * Instalacion de `nodemon` (`npm i -D nodemon`)
        * `package.json`
            ```json
            {
                "scripts":{
                    "dev": "nodemon"
                }
            }
            ```
        * Para ejecutarlo se realizaria usando `npm run dev`
    * Configuracion de rutas
        * Uso de `.get()`, `.post()`, `.put()`, `.delete()` y otros verbos de `HTTP`
        * Uso de `.use()` para que haga match con todos los verbos
            * Parametros de estas funciones
                * Primer parametro sera la ruta donde se invocara
                * Segundo y resto de parametros seran callbacks que reciben tres parametros
                    * El primero sera la `request` o la peticion del usuario
                        * La informacion enviada por el usuario puede ser extraida por tres maneras
                            * Por parametro en la **URL** (`/user/:id/`)
                                * `request.params` 
                            * Por parametros en la **QUERY DE LA URL** (`/user/?id=124` o `/user?id=124`)
                                * Es necesario usar un middleware para ello
                                    ```javascript
                                    app.use(express.urlencoded({ extended: false}))
                                    ```
                                * `request.query`
                            * Por cuerpo de la peticion (para peticiones `POST` o `PUT`)
                                * Es necesario usar un middleware para ello
                                    ```javascript
                                    app.use(express.json())
                                    ```
                    * El segundo sera la `response` o el objeto para la respuesta al usuario
                    * El tercero sera una funcion llamada `next` que se invocara para seguir el flujo de callbacks que se encuentren en la funcion principal (`use`,`get`,...)

        * `server.js`
            
            ```javascript
            const express = require("express")

            const app = express()

            app.use(express.urlencoded({ extended: false }))
            app.use(express.json())

            /**
            * Request principal mediante el verbo GET
            * - Ejemplo de peticion:
            *      
            *      GET http://localhost:8888/?prueba=hola
            * 
            */
            app.get("/", (req, res, next) => {
                res.json({
                    "QUERY": req.query
                })
            })

            /**
            * Request especifica mediante el verbo POST para enviar informacion
            * - Ejemplo de peticion
            * 
            *      POST http://localhost:8888
            *      Content-Type: application/json
            * 
            *      {"mensaje":"hola mundo"}
            */
            app.post("/", (req, res, next) => {
                res.json({
                    "BODY": req.body
                })
            })

            /**
            * Request especifica mediante el verbo GET usando una navegacion dinamica
            * - Ejemplo de peticion
            *  
            *      POST http://localhost:8888/una-cosa/otra-cosa?mensaje=hola mundo
            *      Content-Type: application/json
            *
            *      {"prueba":"hecha la prueba"}
            */
            app.post("/:opcional?/:algo", (req, res, next) => {
                res.json({
                    "PARAMS": req.params,
                    "QUERY": req.query,
                    "BODY": req.body,
                })
            })

            /**
             * Ejemplo de uso de un middleware (codigo que se pone en medio)
             * para permitir o no el paso de una ruta
             */
            app.get("/usuario",validacion,mensaje)

            /** 
             * Funcion que cumple la funcion de middleware
             * Se pondra en medio para verificar la informacion antes del resultado final
            */
            function validacion(request,response,next){
                
                if(request.query.nombre){ 
                    // Si ha permitido un 'nombre' en la url, puede continuar
                    return next()
                }else{
                    return response.send("<h1>Necesita tener un nombre para esta ruta</h1>")
                }
            }
            /**
             * Funcion que cumple la funcion de controlador
             * Mostrara el resultado final
             */
            function mensaje(request,response,next){
                response.send(`<h1>Bienvenido ${request.query.nombre}</h1>`)
            }

            module.exports = app
            ```
    
    * Uso de `express-validator` para validar la informacion del usuario
        
        * `npm i express-validator` ([express-validator](https://express-validator.github.io))
            
            ```javascript
            const express = require("express")
            const { query, validationResult } = require("express-validator")

            const app = express()

            app.use(express.urlencoded({ extended: false }))
            app.use(express.json())

            app.get("/usuario",query("name").notEmpty(),message)

            function message(req,res){

                const errors = validationResult(req)
    
                if (!errors.isEmpty()) {
                    return res.send("<h1>Se debe proporcionar un nombre</h1>")
                }

                res.send(`<h1>Bienvenido ${req.query.name}</h1>`)
            }

            module.exports = app
            ```

* Introduccion a TDD (Test Driven Development)
    * Desarrollo Manejado Por Test 
    * Librerias para el testing:
        * `node:test` - Nativa de NodeJS
        * `jest` - Instalacion requerida
            * `npm install -D jest` 
            * Configuracion del `package.json`
                
                ```json
                {
                    "scripts":{
                        "test": "jest"
                    }
                }
                ```
            * Ejemplo de un archivo de test (`index.spec.js` o `index.test.js`)
            
            ```javascript
            function sum(...nums) {
                const total = 0

                for (let index = 0; index < nums.length; index++)
                    total += nums[index]

                return total
            }

            describe("Operaciones aritmeticas", () => {
                it("Deberia sumar todos los numeros pasados por parametro", () => {
                    expect(sum(1, "2", 5.0)).toBe(8);
                })
            })
            ```

            * Con esta configuracion, buscara todos los archivos que tengan
                la extension `.spec.js` o `.test.js` y procedera a ejecutarlos
            * Para una completa configuracion de testing usando `Jest` tambien sera de utilidad
            la libreria `supertest`
                * `npm i -D supertest`
                * `index.test.js`
                    ```javascript
                    const request = require('supertest')
                    
                    const app = require('./server')
                    
                    describe('Aplicacion de Express', () => {
                        
                        it('deberia existir la ruta raiz', async () => {
                            
                            const res = await request(app).get('/')

                            expect(res.statusCode).toEqual(200)
                        })
                    })
                    ```
            * Por configuracion de variables de entorno en el sistema de windows, haremos uso de
            `cross-env` que nos permite agregar variables de entorno en nuestros `scripts`
                * `npm i -D cross-env`
                * `package.json`

                    ```json
                    {
                        "scripts":{
                            "test": "cross-env NODE_ENV=test jest"
                        }
                    }
                    ```
                * Para acceder a esta variable de entorno llamada `NODE_ENV` en nuestro codigo
                lo hacemos con el uso de `process.env`, ejemplo:
                    ```javascript
                    console.log(process.env.NODE_ENV)
                    ```
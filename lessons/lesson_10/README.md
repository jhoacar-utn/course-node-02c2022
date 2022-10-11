# Contenidos de la clase

* Uso de un servidor por `https`
    * Encriptacion de todas las peticiones y respuestas realizadas
    * Pasos a realizar
        * Generar un certificado
            * Usando `openssl` con la herramienta de `Docker` (powershell)
                * Creando una clave privada y un certificado autofirmado para el SSL
                
                    ```
                    docker run --rm -it -v ${PWD}:/ssl alpine/openssl req -x509 -newkey rsa:4096 -keyout /ssl/key.pem -out /ssl/cert.pem -sha256 -days 365 -nodes
                    ```
            * Usando `selfsigned`, un paquete de node
                * `npm i selfsigned`
                * Codigo para generar el certificado con la clave privada (`key.pem`) y el
                certificado para ser enviado al cliente (`cert.pem`)

                    ```javascript
                    const fs = require("fs");
                    const path = require("path");
                    const selfsigned = require('selfsigned');

                    console.log("Generando un certificado SSL autofirmado");

                    const attributes = [
                        {
                            name: "commonName",
                            value: "miweb.com"
                        }
                    ];

                    const options = {
                        days: 365,
                        algorithm: "sha256",
                    };

                    const pems = selfsigned.generate(attributes, options);

                    console.log(pems);

                    if (!fs.existsSync(path.join(__dirname, "certs"))) {
                        fs.mkdirSync(path.join(__dirname, "certs"));
                    }

                    fs.writeFileSync(path.join(__dirname, "certs", "cert.pem"), pems.cert);

                    fs.writeFileSync(path.join(__dirname, "certs", "key.pem"), pems.private);
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

* Uso de variables de entorno
    * Acceso a las variables de entorno con `process.env`
    * Uso del paquete `dotenv` para cargar las variables desde un archivo `.env`

        * Instalacion
        
            ```bash
            npm i dotenv
            ```
        * Uso

            ```javascript
            require("dotenv").config()
            ```

* Basica ToDo app [https://github.com/jhoacar/text-2-speech-todo-app](https://github.com/jhoacar/text-2-speech-todo-app)
    * [https://txt2speech-todo-app-production.up.railway.app](https://txt2speech-todo-app-production.up.railway.app)
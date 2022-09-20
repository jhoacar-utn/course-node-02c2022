# Curso Programacion Web FullStack

![UTN BA Centro de e-Learning](https://www.frba.utn.edu.ar/wp-content/uploads/2016/08/logo-utn.ba-horizontal-e1471367724904.jpg)

### Repositorio con el codigo del curso de cada estudiante

## [Link de Zoom](https://centrodeelearning.zoom.us/j/98298358252?pwd=YjRIaWhZbk1UaWl3aXdpd09xdmlPQT09)
## [Telegram](https://t.me/+-9ijDnYqGv5mMzRh)

# Consignas para el repositorio

### El estudiante debe tener permiso como colaborador a este repositorio, el cual debera clonarlo en su repositorio local:  
<h3 align="center" style="color:#f6a700">git clone https://github.com/jhoacar-utn/course-node-02c2022.git</h3>

### Ya con el repositorio clonado en local, debera crear una rama con su nombre y apellido separados por el caracter `_`, ejemplo:

* El estudiante con nombre Jhoan Carrero debera crear una rama `jhoan_carrero`
<br>Para ello debera ejecutar: `git checkout -b jhoan_carrero`
<br>Esto creara la rama y tambien se posicionara en ella

### El estudiante debe crear una carpeta con el mismo nombre que creo la rama

* Puede hacerlo con el mouse o escribiendo el comando: `mkdir jhoan_carrero`

### Se debe tener la siguiente estructura de carpetas:
   
    jhoan_carrero
      └── lessons (Se guardaran acá los apuntes del curso)
            ├── lesson_1       
            ├── lesson_2 ( Se organizaran por clase )
            └── ...
      └── project ( Se guardara acá el progreso de la aplicación )
            ├── server
            └── client
      └── practices (Se guardara aca las practicas que se realicen)


<hr>
<details>

  <summary><h1><a href="lessons/lesson_1">Clase 1</a> (Nivelacion)</h1></summary>

  <details>
    <summary><h2>Lenguajes de Programacion (Compilados e Interpretados)</h2></summary>

* Metafora: Recetas de Cocina
  </details>

  <details>
      <summary><h2>Instalacion de Git</h2></summary>
    
  * [Git y Git Bash](https://git-scm.com/downloads)
  </details>

  <details>
    <summary><h2>Comandos de Git</h2></summary>

  * `git clone`: Clona un repositorio remoto en la maquina local, ejemplo: `git clone https://github.com/jhoacar-utn/course-php`
  * `git status`: Muestra el estado actual del respositorio que se encuentra
  * `git branch`: Control de ramas en git, ejemplo: `git branch -a` (muestra todas las ramas del repositorio, tanto local como remotas)
    * `git branch un_nombre_cualquiera` Crea una rama con un nombre que se desee
    * `git branch -d un_nombre_cualquiera` Elimina una rama con un nombre que se desee
    * `git branch -D un_nombre_cualquiera` Elimina una rama a fuerza bruta con un nombre que se desee
    * `git branch -m otro_nombre_cualquiera` Cambia el nombre de la rama actual a otro_nombre_cualquiera.
  * `git checkout`: Control de cambios entre ramas, permite ir y volver entre ellas, ejemplo: `git checkout otra_rama`
    * `git checkout -b nueva_rama` Crea una rama y se mueve hacia ella en este solo comando
  * `git add`: Añade al **stage** un archivo, archivos o carpetas, ejemplo: `git add .` (añade toda la carpeta actual)
  * `git restore`: Regresa los cambios realizados en los archivos o carpetas, ejemplo: `git restore .` (restaura los cambios que no han ido al **stage** de toda la carpeta actual)
    * `--staged` Regresa los cambios que fueron guardados en el **stage**
  * `git commit`: Añade los cambios del **stage** al historial de commits, ejemplo: `git commit -m "mi primer commit"` (guarda en la linea de tiempo un commit por nombre "mi primer commit")
    * `-m` Se especifica un mensaje para el **commit**
  * `git push`: Sube los cambios que se han realizado al repositorio remoto hacia una rama especifica, ejemplo: `git push origin jhoan_carrero`
    * `-f` realiza un push por fuerza bruta, no recomendado, puede borrar commits no deseados
  * `git pull`: Actualiza los cambios que se han realizado en remoto con la maquina local, ejemplo: `git pull origin jhoan_carrero`

  </details>

  <details>
    <summary><h2>Editor de codigo</h2></summary>

    * [Instalacion de VsCode](https://code.visualstudio.com/download)
  </details>


  <details>
    <summary><h2>Instalacion de Docker</h2></summary>

  * [Docker Desktop](https://www.docker.com/products/docker-desktop/)
   * [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install-manual)
  * Windows o Mac `virtualizacion del sistema operativo`
  </details>

  <details>
    <summary><h2>Instalacion de Servidores de Base de datos</h2></summary>

  * [MySQL](https://dev.mysql.com/downloads/windows/installer/8.0.html)
  * [MongoDB](https://www.mongodb.com/cloud/atlas/register)
  </details>

  <details>
    <summary><h2>Protocolos de Comunicación y Servicios</h2></summary>
    
  * IP (Protocolo de Internet, Ubicacion en la red de una maquina)
  * Puertos (Servicios que brinda la maquina, ejemplo el puerto 80 es para servicio web)
  * TCP (Protocolo de Control de Transmision)
    * Comunicacion garantizada, ejemplo paginas web
  * UDP (Protocolo de Datagramas de Usuario)
    * Velocidad garantizada, ejemplo videollamadas
  * HTTP (Protocolo de Transferencia de HyperTexto)
    * Cabeceras
      * Cookies, Tokens, Informacion del Navegador,...
    * Verbos
      * Get, Post, Put,...
    * Body
      * Datos del usuario
  * DNS (Servicios de Nombres de Dominio)
  </details>

  <details>
    <summary><h2>Navegacion Web</h2></summary>

  * HTML,CSS,Javascript
  * Conocimientos del DOM
  </details>

  <details>
    <summary><h2>Trabajo Practico de Nivelacion</h2></summary>
  
  * [Trabajo Practico 1](./tasks/lesson_1/index.html)
  </details>


</details>

<hr>
<details>
  <summary><h1><a href="lessons/lesson_2">Clase 2</a> (Introduccion a Docker)</h1></summary>

  <details>
    <summary><h2>¿Que es Docker? ¿Para que me puede servir? </h2></summary>

  * Diferencia entre **maquina virtual** y **contenedor**
  </details>

  <details>
    <summary><h2>Imagenes en Docker</h2></summary>

  * Comandos utiles
    * `docker images`: Lista todas las imagenes que se hayan descargado
    * `docker pull`: Descarga una imagen del repositorio de [docker hub](https://hub.docker.com/)
    * `docker build`: Permite construir una imagen con el uso de un archivo `Dockerfile`, ejemplo: `docker build .` (se especifica que en la carpeta actual hay un archivo `Dockerfile` para construir la imagen)
      * `docker build -t`: Se le especifica con el parametro `-t` el nombre de la imagen a contruir, ejemplo: `docker build -t mi-imagen:v1` (con el `:` le puedo especificar la version)
  </details>

  <details>
    <summary><h2>Contenedores</h2></summary>

  * Comandos utiles
    * `docker ps`: Lista todos los contenedores que se estan ejecutando
      * `-a` Lista todos los contenedores incluso aquellos que se han detenido
      * `-q` Lista los contenedores que se esta ejecutando pero solo mostrando el id
    * `docker run`: Levanta un **nuevo** contenedor con alguna imagen que se especifique, ejemplo: `docker run ubuntu echo "Hello World"` (el texto `echo "Hello World"` es un comando que se va a ejecutar en el contenedor apenas arranque)
      * `--name` Se le especifica un nombre al contenedor, por defecto es aleatorio
      * `-d` Se le especifica al contenedor que se ejecute en segundo plano
      * `--rm` Elimina el contenedor luego de ejecutado
      * `-it` Habilita el modo interactivo por consola, permitiendo asi ejecutar comandos adentro del contenedor, ejemplo: `docker run -it ubuntu bash` (aparecera un consola de bash para poder ejecutar comandos)
      * `-p` Muy util para especificar puertos a exponer entre el host y el contenedor, es decir, que haga match con algun puerto adentro del mismo y lo muestre afuera en el host, ejemplo:
      `docker run -p 9090:80 ubuntu` (la sintaxis es **host_port:container_port** )
      * `-v` Al igual que el parametro `-p` que hace match entre contenedor y host, este parametro nos viene muy util para hacer match entre carpetas, es decir, voy a poder tener archivos en el contenedor que estan en mi maquina, y asi si realizo algun cambio es afectado en ambos, ejemplo: `docker run -v $(pwd):/app` (al escribir `$(pwd)` lo que hago es hacer uso del directorio actual, `$()` permite ejecutar comandos y mostrar la salida y `pwd` es el comando para imprimir la ruta del directorio actual, la sintaxis es **/host/volume/location:/container/storage**)
      * `-e` Asigna variables de entorno adentro del contenedor, ejemplo: `docker run --env VAR1=value1 --env VAR2=value2 ubuntu`
    * `docker exec`: Ejecuta un comando en un contenedor que se encuentre corriendo
    * `docker start`: Levanta un contenedor que se encuentre detenido
    * `docker stop`: Detiene un contenedor que se encuentre corriendo
    * `docker restart`: Reinicia un contenedor
    * `docker kill`: Mata un contenedor que se encuentre corriendo, ejemplo: `docker kill $(docker ps -aq)` (Este comando matara todos los contenedores que existan, con el comando `docker ps -aq` muestra todos los ids de los contenedores existentes)
    * `docker rm`: Elimina un contenedor y toda su informacion, ejemplo: `docker rm $(docker ps -aq)` (Este comando eliminara todos los contenedores que existan, con el comando `docker ps -aq` muestra todos los ids de los contenedores existentes)
    
  </details>

  <details>
    <summary><h2>Docker Compose</h2></summary>

  * Configuracion de YAML - `docker-compose.yaml` o `docker-compose.yml`
    * `docker-compose up -d`: Corre todos los contenedores en segundo plano como se especifican en el archivo de configuracion
    * `docker-compose down`: Elimina todos los contenedores y la configuracion que se realizo en la red, si o si se necesita el archivo `docker-compose.yaml` para que identifique que eliminar
  </details>

</details>

<hr>
<details>
  <summary><h1><a href="lessons/lesson_3">Clase 3</a> (Introduccion a Node)</h1></summary>

  <details>
    <summary><h2>¿Que es NodeJS? - ¿Para que me puede servir?</h2></summary>

  
  * Motor V8 (Chrome's V8 JavaScript engine)
  * Problemas de concurrencia
  * Adaptabilidad en frontend y backend

  </details>

  <details>
    <summary><h2>Instalacion de NodeJS</h2></summary>

  * [https://nodejs.org/es/download](https://nodejs.org/es/download/)
  * [Uso de NVM](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows)
  * [Instalacion de NVM](https://github.com/coreybutler/nvm-windows/releases)
  </details>

  <details>
    <summary><h2>Uso de NodeJS</h2></summary>

  * Mi primer `Hola Mundo`

  </details>

  <details>
    <summary><h2>Eventos y Callbacks</h2></summary>

  * Practica con `require('events')` [Documentacion](https://www.w3schools.com/nodejs/nodejs_events.asp)
  * Emitiendo un evento especifico llamado `mostrar_fecha` con la fecha actual y mostrarlo por consola cada 1 segundo.
  * Levantando mi primer servidor [HTTP](https://www.w3schools.com/nodejs/nodejs_http.asp) y mostrando `Primer mensaje del backend`
    
  </details>

</details>

<hr>

<details>
  <summary><h1><a href="lessons/lesson_4">Clase 4</a> (Funciones en Javascript)</h1></summary>

  <details>
    <summary><h2>Semantica de funciones</h2></summary>

  * Palabra reservada `function` y `return`
  </details>

  <details>
    <summary><h2>Argumentos en funciones</h2></summary>

  * Por valor
  * Por referencia
  </details>

  <details>
    <summary><h2>Documentacion de Funciones</h2></summary>

  * Documentando con etiquetas `@param` y `@return`
  </details>

  <details>
    <summary><h2>Scope de variables en las funciones</h2></summary>

  * Variables globales
  * Variables locales
  </details>

  <details>
    <summary><h2>Funciones anonimas</h2></summary>

  * Callbacks - Uso de callbacks para manipulacion de arrays
    * Uso de `.map()`, `.filter()` y `.reduce()`
  * Clousures
  </details>

  <details>
    <summary><h2>Modularizacion de codigo</h2></summary>

  * Uso de `require`, `export` y `import`
  </details>

  <details>
    <summary><h2>Uso de <strong>this</strong></h2></summary>

  * Como funciona `this` en Javascript
  * Diferencias entre arrow functions `()=>{}` y functions `function(){}`
  </details>

  <details>
    <summary><h2>Practica de funciones usando array callbacks</h2></summary>
  </details>

</details>

<hr>
<details>
  <summary><h1><a href="lessons/lesson_5">Clase 5</a> (Condicionales y Bucles)</h1></summary>

  <details>
    <summary><h2>Declaracion de condicionales</h2></summary>

  * `if`
  * `else`
  * `operador ternario`
  * `switch`
  </details>
  <details>
    <summary><h2>Declaracion de ciclos</h2></summary>

  * `while`
  * `do-while`
  * `for`
  * `for in`
  * `for of`
  * Directivas de control de ciclos
    * `continue`
    * `break`
    * `return`
  </details>
  <details>
    <summary><h2>Comentarios de codigo</h2></summary>

  * Comentarios de una linea
  * Comentarios multilinea
  * Comentarios para documentacion ([JSDocs Basics](https://jsdoc.app/about-getting-started.html))
  </details>
  <details>
    <summary><h2>Practica de variables, condicionales y ciclos</h2></summary>
  </details>

</details>


<hr>
<details>
  <summary><h1>Clase 6 (Asincronismo, Promesas y Excepciones en Javascript)</h1></summary>  

  <details>
    <summary><h2>¿Que es el Asincronismo? ¿Para que me puede servir?</h2></summary>
  </details>

  <details>
    <summary><h2>setTimeout</h2></summary>

  * setTimeout(()=>{console.log("Ejecutado luego de 1 segundo")},1000)
  </details>

  <details>
    <summary><h2>setInterval</h2></summary>

  * setInterval(()=>{console.log("Ejecutando cada 1 segundo")},1000)
  </details>

  <details>
    <summary><h2>callbacks</h2></summary>

  * [Callbacks hells](http://callbackhell.com/)
  </details>

  <details>
    <summary><h2>Promises</h2></summary>
  
  * new Promise((resolve,reject)=>{
      resolve("Resuelta la promesa");
      reject("Se rechaza la promesa")
  })
  </details>

  <details>
    <summary><h2>async/await</h2></summary>
  
  * async functions
  * await statements
  </details>

  <details>
    <summary><h2>Manejo de excepciones</h2></summary>
  
  * Bloques try/catch
  * Bloque finally
  * Sentencia throw
    * Clase Error - `throw new Error('ocurrio algo')`
  </details>

</details>

<hr>
<details>
  <summary><h1>Clase 7 (Introduccion a Express)</h1></summary>  

  <details>
    <summary><h2>¿Que es Express? ¿Para que me puede servir? </h2></summary>

  * Framework para desarrollo web
  * Flexibilidad de Trabajo
  </details>

  <details>
    <summary><h2>Instalacion de Express ( npm )</h2></summary>

  * `npm install express`
  * Gestor de Paquetes `package.json`
  </details>

  <details>
    <summary><h2>Enrutamiento</h2></summary>

  * Express Router
  * Verbos HTTP y Cabeceras
    * Verbos: GET, POST, DELETE, PUT, ...
    * Cabeceras: Content-Type, Server, User-Agent, ...
  * Modularizacion de Rutas
  * Crear endpoint `GET: lessons/lesson_1` donde la respuesta debera ser el primer TP del curso.
  </details>

  <details>
    <summary><h2>Middlewares (Software que se pone en medio)</h2></summary>
  
  * Autenticar un usuario
  * Proteger las rutas con los usuarios autenticados
  </details>

  <details>
    <summary><h2>Express Validator</h2></summary>
  
  * Validacion de Campos del usuario
  * https://express-validator.github.io/docs/
  </details>

</details>

<hr>
<details>
  <summary><h1>Clase 8 (Patron de Diseño MVC)</h1></summary>  

  <details>
    <summary><h2>¿Que es el Patron MVC?</h2></summary>
    
  * Explicacion sencilla basada en arquitectura de videojuegos
  * Concepto de Rutas
  * Concepto de Controlador
  * Concepto de Modelo
  * Concepto de Vista
  </details>

  <details>
    <summary><h2>Modelo</h2></summary>

  * Uso de `sequelize` para sql - [sequelize](https://sequelize.org/docs/v6/getting-started/)
    * Conexion
    * Tablas
    * Columnas
    * Filas
  * Uso de `mongoose` para mongodb - [mongoose](https://mongoosejs.com/docs/)
    * Conexion
    * Colecciones
    * Indices
    * Documentos
  </details>

  <details>
    <summary><h2>Vista</h2></summary>

  * Uso de plantillas
    * [handlebars](https://handlebarsjs.com/installation/)
    * [ejs](https://ejs.co/#install)
  * Uso de JSON
  </details>

  <details>
    <summary><h2>Practica sobre modelo mvc con rutas</h2></summary>
  </details>
</details>

<hr>
<details>
  <summary><h1>Clase 9 (Clase de Repaso y Consultas)</h1></summary>  

* Repaso sobre servidores
* Resolucion de problemas con docker
* Resolucion de problemas con Express
* Repaso sobre el patron de diseño MVC
* Repaso sobre Sequelize y sobre mongoose
  
</details>

<hr>
<details>
  <summary><h1>Clase 10 (Configuracion de Proyecto del Servidor)</h1></summary>  

  <details>
    <summary><h2>Organizacion de directorios</h2></summary>

    server
      └── boot (Se guardara toda la configuracion de arranque)
      └── config (Se guardaran acá la configuracion del proyecto)
      └── controllers (Se guardara acá los controladores de la aplicación )
      └── models (Se guardara acá los modelos de la aplicación )
      └── routes (Se guardara aca las rutas que seran accedidas por el cliente)
      └── .env (Archivo con la informacion para la configuracion de la aplicacion)
      └── .gitignore (Archivo con las carpetas o archivos que ignorara git)
      └── index.js (Sera el codigo necesario para arrancar todo) 
      └── package.json (Sera el archivo con los paquetes del proyecto) 

  * Alias en las carpetas
    * https://arunmichaeldsouza.com/blog/aliasing-module-paths-in-node-js
    * https://smellycode.com/require-with-aliases/

  </details>

  <details>
    <summary><h2>Configuracion de entorno de desarrollo</h2></summary>

  * Linter [ESLint + Prettier](https://blog.bitsrc.io/how-to-set-up-node-js-application-with-eslint-and-prettier-b1b7994db69f)
    * `npm install eslint eslint-config-prettier prettier –-save-dev`
    * In file `.eslintrc.json`
    
    ```json
    {
      "root": true,
      "parserOptions": {
          "ecmaVersion": 12,
          "sourceType": "module"
      },
      "extends": ["eslint:recommended", "prettier"],
      "env": { 
          "es2021": true,
          "node": true
      },
      "rules": {
          "no-console": "error"
      }
    }
    ```

    * In file `.prettierrc.json`

    ```json
    {
      "trailingComma": "es5",
      "tabWidth": 4,
      "semi": false,
      "singleQuote": true
    }
    ``` 

    * In file `package.json`

    ```json
    {
      ...
      "scripts": {
          ...
         "format:check": "prettier --check .",
         "format:write": "prettier --write .",
         "lint:check": "eslint .",
         "lint:fix": "eslint --fix ."
      }
      ...
    }
    ``` 

  * Testing - [Jest](https://dev.to/lukekyl/testing-your-express-js-backend-server-3ae6)
    * `npm install jest --save-dev`
    * `npm install supertest --save-dev`
    * `npm install cross-env --save-dev`
    * In file `package.json`

    ```json
    {
      ...
      "scripts": {
        ...
        "test": "cross-env NODE_ENV=test jest --testTimeout=10000",
        "pretest": "cross-env NODE_ENV=test npm run migrate:reset",
        "migrate:reset": "npx sequelize-cli db:migrate:undo:all && npm run migrate",
        "migrate": "npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all",
      },
      "jest": {
        "testEnvironment": "node",
        "coveragePathIgnorePatterns": ["/node_modules/"]
      }
    }
    ```
  </details>

  <details>
    <summary><h2>Preparacion de documentacion para API</h2></summary>

  * [Swagger](https://medium.com/@italo.ravina/a%C3%B1adir-documentaci%C3%B3n-con-swagger-a-un-api-creada-en-express-5c4c5c3cb19e)
    * `npm i swagger-jsdoc swagger-ui-express`

  </details>
</details>

<hr>
<details>
  <summary><h1>Clase 11 (Introduccion a API)</h1></summary>  

  <details>
    <summary><h2>¿Que es una API?</h2></summary>

  * API (Interface de la Aplicacion)
  * REST (Transferencia de Estado Representacional)
    * Respuesta de endpoints (URI y Verbo) mediante uso de JSON
  * Cabeceras de respuesta
      * `Content-Type: application/json` vs `Content-Type: text/html;`
  </details>
  
   <details>
    <summary><h2>Registro hacia una API</h2></summary>
  
  * Modelo de Usuario
  * Formulario de registro
    * Contraseñas encriptadas
    * Uso de `bcrypt` - `npm install bcrypt`  
  </details>

   <details>
    <summary><h2>Autenticacion hacia una API</h2></summary>

  * JWT (JSON Web Tokens)
    * `npm install jsonwebtoken`
    * Busqueda en la base de datos
    * Validacion de sesion
    * Proteccion de rutas (Middlewares, Cors)
  </details>

  <details>
    <summary><h2>Instalacion de Thunder Client en VSCode</h2></summary>
  </details>

</details>


<hr>
<details>
  <summary><h1>Clase 12 (Manejo del storage en el servidor)</h1></summary>  

  <details>
    <summary><h2>Formulario para subir archivos</h2></summary>

  ```html
  <html>
  <style>
    form{
        margin: 100px;
        border: 1px solid black;
        border-radius: 10px;
    }
    div {
        margin:10px;
        padding: 10px;
        text-align: center;
    }
    input[type="file"] {
        display: none;
    }

    label,
    input[type="submit"] {
        border: 1px solid black;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
    }
  </style>
  <body>
      <form method="post" action="/api/upload" enctype="multipart/form-data">
          <div>Formulario de Ejemplo</div>
          <div>
              <label for="boton">Escoga el archivo</label>
              <input id="boton" type="file" name="archivo" />
          </div>
          <div><input type="submit" value="Subir archivo"></div>
      </form>
  </body>
  </html>
  ```
  </details>

  <details>
    <summary><h2>Middleware de Almacenamiento</h2></summary>

  * [Multer](http://expressjs.com/en/resources/middleware/multer.html)
    * `npm install --save multer` 

  </details>

  <details>
    <summary><h2>Control de Tipos de datos</h2></summary>

  * Desde el frontend
    
    ```html
    <input type="file" name="song" accept="audio/*"/>
    ```
  
  * Desde el backend

    ```javascript
    const storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './public/uploads/')
        },
        filename: function (req, file, cb) {
            const datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
        }
    });

    const upload = multer({ //multer settings
        storage: storage,
        fileFilter: function (req, file, callback) {
            const ext = path.extname(file.originalname);
            if(ext !== '.mp3' && ext !== '.wav') {
                return callback(new Error('Only audio are allowed'))
            }
            callback(null, true)
        },
        limits:{
            fileSize: 1024 * 1024
        }
    }).single('song');
    ```

  </details>

</details>

<hr>
<details>
  <summary><h1>Clase 13 (Introduccion a Typescript)</h1></summary>  

  <details>
    <summary><h2>¿Que es Typescript?</h2></summary>

  * [Transpilador de JavaScript](https://www.typescriptlang.org/)
  </details>


  <details>
    <summary><h2>Configuracion de Typescript</h2></summary>
    
  * [Via NPM](https://www.typescriptlang.org/download):
    * `npm install typescript --save-dev`
    * `npx tsc --init`
  </details>

  <details>
    <summary><h2>Tipado Estatico</a></h2></summary>

  * `number`
  * `string`
  * `class`
  * `interface`
  * `type` - [diferencia entre interface](https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript)
  </details>

  <details>
    <summary><h2>Practica con typescript</h2></summary>
  </details>

</details>

<hr>

<details>
  <summary><h1>Clase 14 (Clase de Repaso y Consultas)</h1></summary>  

  * Inconvenientes con Docker y MySQL
  * Dudas sobre `express`
  * Dudas sobre `mongoose` (ODM)
  * Dudas sobre `Sequelize` (ORM)
  * Dudas sobre `multer`
  * Dudas sobre `typescript`
  * Realizacion de mini proyecto usando CRUD para una lista de tareas
  
</details>

<hr>
<details>
  <summary><h1>Clase 15 (Introduccion a React)</h1></summary>

  <details>
    <summary><h2>¿Que es React?</h2></summary>

  * Creacion de Proyecto de react
    * [create-react-app](https://create-react-app.dev/docs/getting-started) - `npx create-react-app miapp`
    * [ViteJS](https://carlosazaustre.es/react-vite)

  </details>

  <details>
    <summary><h2>¿Que es un Componente?</h2></summary>

  * Componente por clase
  * Propiedades de un componente (props)
  * Estado de un componente (state)
  </details>

  <details>
    <summary><h2>Ciclo de vida de un componente</h2></summary>

  * [Funciones controladoras](https://platzi.com/blog/ciclo-de-vida-de-un-componente-de-reactjs/)
    * constructor(props)
    * componentWillMount()
    * render()
    * componentDidMount()
    * componentWillUnmount()
  </details>

  <details>
    <summary><h2>Practica de contador</h2></summary>
  </details>

</details>

<hr>
<details>
  <summary><h1>Clase 16 (Conexion de Frontend con Backend)</h1></summary>

  <details>
    <summary><h2>Uso de fetch con Javascript</h2></summary>

  * Promesas
    * Sincronas (no detiene el flujo del programa)
      * `.then`
      * `.catch` 
    * Asincronas (detienen el flujo del programa)
      * `async`
      * `await`
  </details>

  <details>
    <summary><h2>Peticiones por POST con fetch</h2></summary>

  * Sintaxis
  * Cabeceras de peticion para enviar informacion en formato JSON
    
    ```javascript
    fetch("http://example.com/api/endpoint/", {
      method: "post",
      // Las cabeceras son vital importancia ya que asi le decimos al servidor que procese la informacion enviada como un json
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      // Nos aseguramos de mandar la informacion del OBJETO en formato STRING
      body: JSON.stringify({
        name: myName,
        password: myPassword
      })
    })
    .then( (response) => { 
      // Luego de resuelta la promesa ejecutariamos la logica correspondiente
    });
    ```

  </details>

  <details>
      <summary><h2>Peticiones asincronas desde el cliente</h2></summary>

  * Creacion de Servicios
  * Peticiones por `GET` y por `POST`
  </details>

  <details>
      <summary><h2>Practica para renderizado de una API</h2></summary>
  </details>

</details>

<hr>
<details>
  <summary><h1>Clase 17 (Componentes de Funciones)</h1></summary>

  <details>
  <summary><h1>React Hooks</h1></summary>  

  * useState
  * useRef
  * useEffect
  * useContext
  * useReducer
  * customHooks
  </details>

  <details>
  <summary><h1>useState</h1></summary>  

  * Declarar estados que cambiaran en el componente
  </details>

  <details>
  <summary><h1>useRef</h1></summary>  

  * Engancha un componente del dom
  </details>

  <details>
  <summary><h1>useEffect</h1></summary>  

  * Ejecuta sentencias de codigo apartir de cambios en algunas variables
  </details>

</details>

<hr>
<details>
  <summary><h1>Clase 18 (React Hooks)</h1></summary>

  <details>
  <summary><h1>useContext</h1></summary>  

  * Forma de declarar variables globales
  </details>

  <details>
  <summary><h1>useReducer</h1></summary>  

  * Control del estado apartir de funciones reductoras (funciones puras)
  </details>

</details>

<hr>
<details>
  <summary><h1>Clase 19 (React Design)</h1></summary>

  <details>
    <summary><h2>Incorporacion de Frameworks de diseño</h2></summary>
    
  * [PicoCSS](https://picocss.com/)
  * [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/download/)
  * [Materialize](https://materializecss.com/getting-started.html)
  </details>

  <details>
    <summary><h2>Material UI</h2></summary>
    
  * [Usage](https://mui.com/material-ui/getting-started/usage/)
  </details>


</details>

<hr>
<details>
  <summary><h1>Clase 20 (React Router)</h1></summary> 
   

  <details>
    <summary><h2>Incorporacion de Imagenes</h2></summary>
    
  * Manejo de subida de archivos
  </details>

  <details>
    <summary><h2>Manejo de cierre de sesión</h2></summary>
    
  * Invalidar o borrar la cookie de sesion
  </details>
</details>

<hr>
<details>
  <summary><h1>Clase 21 (Almacenamiento en el Navegador)</h1></summary> 
   
 

</details>

<hr>
<details>
  <summary><h1>Clase 22 (Despliegue con Heroku)</h1></summary> 
   
 
</details>

<hr>
<details>
  <summary><h1>Clase 23 (Clase de Repaso y Consultas)</h1></summary> 
   
* Inconvenientes con Heroku
* Inconvenientes con PostgreSQL
* Dudas sobre API Rest
* Dudas sobre Modelos
* Dudas sobre Eloquent
</details>

<hr>
<details>
  <summary><h1>Clase 24 (Teoria de Servidores)</h1></summary> 
   
  <details>
    <summary><h2>Protocolo IP</h2></summary>

  * Direccionamiento con Bits
  * Clases de IP
    * Publica
    * Privada - [RFC1918](https://es.wikipedia.org/wiki/Red_privada#Redes_privadas_IPv4)
  * Tipos de IP
    * IPv4
    * IPv6
  * Mascara de Red
  * Router
  * Direccion MAC
  </details>

   
  <details>
    <summary><h2>DNS</h2></summary>
  
  * Registros (Records)
    * A
    * AAAA
    * CNAME
  * Comandos utiles
    * `nslookup` me permite encontrar ip de un dominio
  </details>

</details>


<hr>
<details>
  <summary><h1>Clase 25 (Github Actions)</h1></summary> 
   
  <details>
    <summary><h2>¿Que es CI/CD?</h2></summary>

  * Integracion continua con testing unitarios y de integracion
  * Despliegue continuo con testing e2e
  </details>

  <details>
    <summary><h2>Workflows</h2></summary>

  * Definiendo flujos del despliegue con sintaxis `yaml`
  </details>

  <details>
    <summary><h2>Despliegue continuo con Heroku</h2></summary>

  * Uso de acciones para despliegue
  </details>

  <details>
    <summary><h2>Mucho más...</h2></summary>

  * [Telegram Notify](https://github.com/marketplace/actions/telegram-notify)
  * [Slack Notify](https://github.com/marketplace/actions/slack-notify)
  </details>
</details>

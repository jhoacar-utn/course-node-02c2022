# Contenidos vistos en clase:

* Manejo de excepciones
    * Uso de `try` y `catch` (para controlar los errores)
    * Uso de `finally` (para ejecutar lineas de codigo si o si)
    * Uso de `throw` (para lanzar errores)
        ```javascript
        function division(a,b){
            
            if( isNaN(parseInt(a)) || isNaN(parseInt(b)) ){
                throw new Error("Los parametros deben ser numeros")
            }
            if( b == 0 ){
                throw new Error("No se puede dividir por cero")
            }
            return a/b;
        }

        const numerador = 1
        const denominador = 0

        try{
            console.log(division(numerador,denominador))
        }catch(error){
            console.log(error.message)
        }
        finally{
            console.log("Se ha realizado la division")
        }

        console.log("Estoy continuando el codigo del programa")
        ```
* Creacion de objetos a partir de clases
    * Creacion de objetos con `new`
        * Uso de `class`
            ```javascript
            class Estudiante{
                constructor(name){
                    this.name = name
                }
                study(){
                    console.log(this.name+" esta estudiando")
                }
            }

            const sofia = new Estudiante("sofia")
            const pedro = new Estudiante("pedro")

            sofia.study()
            pedro.study()
            ```
        * Uso de `function`
            * Uso de `prototype`
                ```javascript
                function Estudiante(name) {
                    this.name = name
                }
                Estudiante.prototype.study = function () {
                    console.log(this.name + " esta estudiando")
                }

                const sofia = new Estudiante("sofia")
                const pedro = new Estudiante("pedro")

                sofia.study()
                pedro.study()
                ```
    * Creacion de objetos con **spread operator** (`...`)
        ```javascript
        const Estudiante = {
            name: "",
            study: function () {
                console.log(this.name + " esta estudiando")
            }
        }

        const sofia = { ...Estudiante, name:"sofia"}
        const pedro = { ...Estudiante, name:"pedro"}

        sofia.study() 
        pedro.study()
        ```

* Uso de promesas 
    * Estados de una promesa
        * `pending` (por defecto)
        * `fullfilled` o `accepted`  
        * `rejected`
    * Formas de controlar una promesa
        * Sincrona ( no detiene el flujo del programa )
            * `.then()` metodo para controlar cuando es resuelta
            * `.catch()` usada cuando es rechazada
        * Asincrona ( detiene el flujo del programa )
            * `async` y `await` para esperar la ejecucion de la promesa
            * `try` y `catch` para controlar los errores
* Uso de `npm` (node package manager)
    * `npm install paquete@version` o `npm i paquete@version` 
        * Si no es especificada la version, se instalara la ultima
* Uso de `fetch`
    * Realiza peticiones asincronas en internet
    * Nativo del navegador
    * Instalacion en `NodeJS` con `npm`
        * `npm install node-fetch`
            * Instalara la ultima version (`v3`)
            * Para trabajar con esta version necesaritaremos configurar algo mas:
                * `package.json`
                    ```json
                    {
                        "type":"module"
                    }
                    ```
                * `index.js`
                    ```javascript
                    import fetch from "node-fetch"
                    ```
        * `npm install node-fetch@2`
            * Instalara una version especifica, sera `v2`
            * No se necesitara ninguna configuracion previa y solo se utilizara usando `require`
                ```javascript
                const fetch = require("node-fetch")
                ```
    * Casos de uso
        * Traer informacion directamente desde internet
            ```javascript
            // Usando "type":"module" en package.json
            import fetch from "node-fetch"

            const url = "https://google.com"
            const response = await fetch(url)
            const result = await response.text()
            console.log(result)
            ```
* Uso de `axios`
    * Realiza peticiones asincronas en internet
    * No es nativo del navegador
    * Instalacion en `NodeJS` con `npm`
        * `npm install axios`
            * Podemos usar esta libreria sin ningun inconveniente con `require` o `import`
    * Casos de uso
        * Traer informacion directamente desde internet
            ```javascript
            // Usando "type":"module" en package.json
            import axios from "axios"

            const url = "https://google.com"
            const response = await axios.get(url)
            const result = response.data
            console.log(result)
            ```
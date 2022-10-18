# Contenidos de la clase

* [Proyecto Final](../../project/Final_Project.pdf)
* Operaciones CRUD
    * [Mongoose](https://mongoosejs.com/docs/)
* Uso de HTML para peticiones
    * Uso de `fetch` (utilidad nativa del navegador)
    * Uso de `axios` (utilidad a [instalar](https://axios-http.com/docs/intro#installing))
        
        * Importing using Javascript
        
            ```javascript
            import('https://unpkg.com/axios/dist/axios.min.js')
                .then(()=>console.log("Installed"))
                .catch((error)=>console.log("Error: "+error.message));
            ```
        * Importing using HTML

            ```html
            <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
            ```

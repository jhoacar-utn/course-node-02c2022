# Proyecto Final

## Pasos para la configuracion local de testing del proyecto

* ### 1) Habilitar la herramienta de docker para los contenedores
* ### 2) Ubicarse con la consola en la carpeta raiz del proyecto e instalar las dependencias

    ```
        npm install
    ```
    
* ### 3) Habilitar el contenedor para el testing del proyecto
    * Ejecutar el siguiente comando para levantar el entorno
    
        ```
            npm run docker:up
        ```

* ### 4) Ingresar al contenedor para su manipulacion
    * Ejecutar el siguiente comando para ingresar al contenedor

        ```
            npm run docker:in
        ```

        * Si ocurre algun error, o directamente no puede ingresar al contenedor, los detenemos con el siguiente comando

            ```
                npm run docker:down
            ```

        * Si aun no se detiene, podemos forzar a cerrar todos los contenedores

            ```
                npm run docker:kill:containers
            ```

        * Y podemos eliminar el registro que se tenga de estos contenedores

            ```
                npm run docker:rm:containers
            ```

        * Teniendo todo `limpio`, lo volvemos a iniciar

            ```
                npm run docker:up
            ```

        * Repetimos el incio de este paso para ingresar con `npm run docker:in`

* ### 5) Ejecutar el comando de testing
    * Al ejecutar el comando se inicializaria los tres tipos de tests
        
        ```
            npm test
        ```
    
    * Notas importantes: 
        * Antes de ejecutar los tests seria ideal limpiar todos los puertos que se encuentren abiertos, para ello adentro del contenedor podemos ejecutar el comando
            
            ```
                npm run clear:ports
            ```

        * Esto puede tardar un monton, asi que hay que tener paciencia!
        * Para disminuir un poco la etapa de testing, es recomendable
        instalar todas las dependencias del proyecto en su carpeta personal. Ejemplo:

            ```
                cd jhoan_carrero/project && npm install
            ```
        
        De esta manera nos aseguramos que el test no tardara tiempo innecesario instalando cosas porque ya previamente las instalamos

# Notas Generales

* ### Para depuracion del servidor ver el archivo [test/debug.txt](test/debug.txt)

* ### Para eliminar todas las carpetas `node_modules` y archivos `package-lock.json` del repositorio, hay dos comandos utiles:

    ```
        npm run clear:node_modules
    ```

    ```
        npm run clear:package-lock.json
    ```


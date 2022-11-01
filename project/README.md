# Proyecto Final

## Pasos para la configuracion local de testing del proyecto

### Crear un archivo `.env` en la raiz del proyecto con las siguientes variables de entorno

```
TIMEOUT_SERVER=10
DEBUG_TEST=1
```

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

* ### Para depuracion del servidor ver el archivo [test/logs/debug.txt](test/logs/debug.txt)

* ### Para manipulacion con Git en el contenedor, es necesario crear un archivo `.env` con el correo y el usuario para que se puedan registrar los commits
    
    * Ejemplo: 
    
        ```
        GIT_EMAIL=jhoacar.utn@gmail.com
        GIT_USERNAME=jhoacar-utn
        ```
    
    * Para realizar push, se pedira un inicio de sesion con el usuario y la contraseña, pero OJO porque la contraseña que acepta no es la que se usa para iniciar sesion en el navegador, sino un token que se debe generar por aca [https://github.com/settings/tokens](https://github.com/settings/tokens)

    * Estas credenciales seran pedidas cada vez que se desee realizar un push, por lo tanto lo recomendable sera crear una conexion por credenciales de SSH ingresando nuestra clave publica guardada en [/docker/root/.ssh/id_rsa.pub](/docker/root/.ssh/id_rsa.pub) en la siguiente pagina de configuracion de github [https://github.com/settings/ssh/new](https://github.com/settings/ssh/new)

* ### Para eliminar todas las carpetas `node_modules` y archivos `package-lock.json` del repositorio, hay dos comandos utiles:

    ```
        npm run clear:node_modules
    ```

    ```
        npm run clear:package-lock.json
    ```


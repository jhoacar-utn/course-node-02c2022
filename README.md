# Curso Programacion Web FullStack

![UTN BA Centro de e-Learning](https://www.frba.utn.edu.ar/wp-content/uploads/2016/08/logo-utn.ba-horizontal-e1471367724904.jpg)

<hr>
<details>

  <summary><h1>Clase 1 (Nivelacion)</h1></summary>

  <details>
    <summary><h2>Lenguajes de Programacion (Compilados e Interpretados)</h2></summary>

* Metafora: Recetas de Cocina
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
    <summary><h2>Instalacion de Docker</h2></summary>

  * [Docker Desktop](https://www.docker.com/products/docker-desktop/)
  * Windows o Mac `virtualizacion del sistema operativo`
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
  </details>


</details>

<hr>
<details>
  <summary><h1>Clase 2 (Introduccion a Docker)</h1></summary>

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
  <summary><h1>Clase 3 (Introduccion a PHP)</h1></summary>

  <details>
    <summary><h2>¿Que es PHP? - Historia</h2></summary>

  * Paginas web dinamicas desde 1995
  </details>

  <details>
    <summary><h2>Servidores para PHP</h2></summary>

  * Apache
  * Nginx
  * Lighttpd
  * ...
  </details>

  <details>
    <summary><h2>Conectores de PHP al servidor</h2></summary>

  * mod_php
  * CGI
  * FastCGI
  * FPM
  
  ## [mod_php vs CGI vs FastCGI vs FPM](https://blog.ahierro.es/php-mod_php-vs-cgi-vs-fastcgi-vs-fpm/)
  </details>

  <details>
    <summary><h2>Configuracion con Docker</h2></summary>

  * LAMP (Linux-Apache-MySQL-PHP) Docker Services - ([configuration](https://gist.github.com/Beyarz/674b24d03614fde205a38f449800857a))

    **`docker-compose.yaml`**

    ```YAML
    version: "3" # Nosotros especificamos la version del docker-compose
    services: # Declaramos los servicios
        # Llamamos un servicio, como www, pero puede llevar cualquier nombre
        # Lo importante esque este nombre sera el nombre usado en la red interna de docker
        www: 
            build: . # Le decimos que construya una imagen que usara este contenedor
            restart: always # Si algo falla al crearse el contenedor, se vuelve a reiniciar
            image: course:1.0.0 # Luego de construida la imagen que le ponga el nombre de course en la version 1.0
            container_name: course # Este sera el nombre del contenedor, viene siendo el uso de --name
            ports: # Le especificamos la configuracion de los puertos del host y el contenedor
                - "8000:80" # La sintaxis es "puerto-host":"puerto-contenedor", entonces veremos la pagina en localhost:8000
            volumes: # Le especificamos que debe montar un directorio en el contenedor para visualizarlo en el host
                - ./:/var/www/html/ # Le decimos que sea la carpeta actual con './' y que la ingrese en '/var/www/html' 
            links: # Aca se estaria vinculando el contenedor de la base de datos en este
                - mysql:mysql # A grandes rasgos, copia la direccion ip del contenedor de mysql en el /etc/hosts/
            depends_on: # Le bloqueamos la inicializacion hasta que el contenedor de base de datos este arriba
                - mysql
        mysql: # Llamamos a este servicio que tendra acceso en la red interna de docker atraves de este nombre
            image: mysql:8.0.16 # Le especificamos una version de la imagen de mysql ya que es una buena practica
            command: --default-authentication-plugin=mysql_native_password # Con este comando garantizamos las credenciales para iniciar sesion
            container_name: mysql # Este sera el nombre del contenedor, viene siendo el uso de --name
            ports: # Habilitamos los puertos que se exponen en el host y los vinculamos con el del contenedor
                - "3306:3306" # Por defecto el puerto para mysql es 3306
            volumes: # Conectamos un volumen con la carpeta que maneja toda la informacion de la base de datos
                - volumen_mysql:/var/lib/mysql # Este volumen no es un directorio sino uno que se ha creado directamente docker, mas abajo se comenta
            environment: # Le pasamos las variables de entorno o variables de configuracion al contenedor
                MYSQL_DATABASE: course # Le especificamos que tiene que crear una base de datos llamada 'course'
                MYSQL_USER: user # Le especificamos que tiene que crear un usuario llamado user
                MYSQL_PASSWORD: user # Le especificamos su contraseña a esta base de datos
                MYSQL_ROOT_PASSWORD: root # Le especificamos la contraseña del super usuario root que sera 'root'

        phpmyadmin: # Llamamos a este servicio para poder mostrar y gestionar la base de datos de una manera mas amigable
            image: phpmyadmin/phpmyadmin:4.8 # Le especificamos una version por buenas practicas
            container_name: phpmyadmin # Este sera el nombre del contenedor, viene siendo el uso de --name
            links: # Vinculamos la base de datos a este contenedor
                - mysql:mysql # Directamente asigna la ip del contenedor por nombre 'mysql' en el /etc/hosts de este contenedor
            ports: # Habilitamos los puertos por el cual este gestor de base de datos sera controlado
                - 8080:80 # Por lo tanto podremos manejar la base de datos accediendo al localhost:8080
            environment: # Le pasamos las variables de configuracion
                PMA_ARBITRARY: 1 # Con este parametro le permitimos disponibilidad de yo escoger luego las credenciales
            depends_on:
                - mysql
    # Esta seccion es importante que es para montar un volumen directamente con docker y que no sea una carpeta de mi sistema
    # Esto es importante ya que si no lo hacemos con volumenes de docker sino volumenes usando directorios como './mi-carpeta' no functionaria
    # Puede funcionar si se estaria usando un sistema operativo de linux que soporta sistemas de archivos ext4 y no ntfs como es en el caso de windows
    volumes:
        volumen_mysql:
            external: false
    ```

    **`Dockerfile`**

    ```Dockerfile
    # Le especificamos que imagen sera la creada, que usaremos la de php en la version 8.1 con 
    # servidor de apache
    FROM php:8.1-apache

    # Dejamos un archivo de configuracion por defecto
    COPY apache.conf /etc/apache2/sites-available/000-default.conf

    # Le agregamos un php.ini para cargar configuraciones personalizadas para PHP
    COPY php.ini /usr/local/etc/php/custom-php.ini
    ```

    **`apache.conf`**

    ```xml
    <VirtualHost *:80>
        DocumentRoot /var/www/html

        <Directory /var/www/html>
            Options +Indexes +FollowSymLinks
            AllowOverride All
            Require all granted
        </Directory>
    </VirtualHost>
    ```

    **`php.ini`**

    ```php.ini
    max_input_time = 60
    memory_limit = 128M
    post_max_size = 8M
    file_uploads = On
    upload_max_filesize = 2M
    max_file_uploads = 20
    ```

  </details>

  <details>
    <summary><h2>Versionado de PHP</h2></summary>

  * Versiones aconsejadas `>=7.4` ([versionado semantico](https://fperez217.medium.com/qu%C3%A9-es-versionamiento-sem%C3%A1ntico-bf495b9eb028) - [video](https://www.youtube.com/watch?v=hwlOuZvaDIA) - [Packagist Semver Checker](https://semver.madewithlove.com/?package=madewithlove%2Fhtaccess-cli&constraint=dev-main&stability=stable))
    
  </details>

  <details>
    <summary><h2>Uso de PHP</h2></summary>

  * Codigo PHP - Etiqueta `<?php `
  * Mostrando toda la informacion sobre la configuracion de php - `<?php phpinfo();`
  * Variables predefinidas
    * **Superglobals** — Superglobals son variables internas que están disponibles siempre en todos los ámbitos:
      * `$GLOBALS` — Hace referencia a todas las variables disponibles en el ámbito global
      * `$_SERVER` — Información del entorno del servidor y de ejecución
      * `$_GET` — Variables HTTP GET
      * `$_POST` — Variables POST de HTTP
      * `$_FILES` — Variables de subida de ficheros HTTP
      * `$_REQUEST` — Variables HTTP Request
      * `$_SESSION` — Variables de sesión
      * `$_ENV` — Variables de entorno
      * `$_COOKIE` — Cookies HTTP
    * `$php_errormsg` — El mensaje del error anterior
    * `$http_response_header` — Encabezados de respuesta HTTP
    * `$argc` — El número de argumentos pasados a un script
    * `$argv` — Array de argumentos pasados a un script
  * Mostrando la informacion de las variables con `echo`,`print_r` y `var_dump`
  * Declaracion de variables

  </details>

</details>

<hr>
<details>
  <summary><h1>Clase 4 (Condicionales y Bucles)</h1></summary>

  <details>
    <summary><h2>Declaracion de condicionales</h2></summary>

  * `if`
  * `else`
  * `operador ternario`
  * `switch`
  * [match](https://www.php.net/manual/es/control-structures.match.php) `(php>=8.0.0)`
  </details>
  <details>
    <summary><h2>Declaracion de ciclos</h2></summary>

  * `while`
  * `do-while`
  * `for`
  * `foreach`
  * Directivas de control de ciclos
    * `continue`
    * `break`
    * `return`
  </details>
  <details>
    <summary><h2>Comentarios de codigo</h2></summary>

  * Comentarios de una linea
  * Comentarios multilinea
  * Comentarios para documentacion ([PHPDocs Basics](https://phpstan.org/writing-php-code/phpdocs-basics))
  </details>
  <details>
    <summary><h2>Practica de variables, condicionales y ciclos</h2></summary>
  </details>

</details>

<hr>
<details>
  <summary><h1>Clase 5 (Funciones en PHP)</h1></summary>

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
    * Uso de `array_map`, `array_filter` y `array_reduce`
  * Clousures
  </details>

  <details>
    <summary><h2>Modularizacion de codigo</h2></summary>

  * Uso de `include`, `include_once`,`require` y `require_once`
  </details>

  <details>
    <summary><h2>Practica de funciones usando array callbacks</h2></summary>
  </details>

</details>

<hr>
<details>
  <summary><h1>Clase 6 (Introduccion a POO con PHP)</h1></summary>  

  <details>
    <summary><h2>¿Que es POO? ¿Para que me puede servir?</h2></summary>

  * Caracteristicas de POO
    * Cohesión
    * Acoplamiento
    * Encapsulamiento.
    * Herencia
    * Abstracción
    * Polimorfismo
  </details>

  <details>
    <summary><h2>Sintaxis de clases en PHP</h2></summary>

  * Ejemplo de clase base
    * Atributos
    * Metodos y [Metodos magicos](https://www.php.net/manual/es/language.oop5.magic.php)
  * Ejemplo de Cohesion de clase base (reduccion de complejidad en clases)
  * Ejemplo de Acoplamiento de clase base (El bajo acoplamiento es frecuentemente una señal de un sistema bien estructurado y de un buen diseño de software)
  * Ejemplo de Encapsulamiento de clase base (ocultamiento del estado)
    * ![Encapsulamiento](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/03_Encapsulamiento.jpg/450px-03_Encapsulamiento.jpg)
  </details>
</details>

<hr>
<details>
  <summary><h1>Clase 7 (Herencia y Abstraccion)</h1></summary>  

  <details>
    <summary><h2>¿Que es la Herencia? ¿Que es la Abstraccion?</h2></summary>

  * Abstraccion
    * Uso de la abstraccion para atributos entre clases
      * atributos y funciones `public`,`private` y `protected`
    * Metodos y variables estaticas
      * Constantes estaticas - `const`
      * Variables estaticas - `static`
        * Uso de `::class`
      * Metodos estaticos - `static function`
  * Herencia simple
    * Uso de `extends` entre clases
  * Herencia "multiple"
    * Uso de `traits` con `use`
  </details>

  <details>
    <summary><h2>Practica sobre herencia simple y herencia multiple</h2></summary>
  </details>
</details>

<hr>
<details>
  <summary><h1>Clase 8 (Polimorfismo)</h1></summary>  

  <details>
    <summary><h2>¿Que es el Polimorfismo?</h2></summary>
    
  * Poli: muchas - morfismo: formas
  * Reutilizacion de codigo
  </details>

  <details>
    <summary><h2>¿Que son las interfaces?</h2></summary>

  * Uso de `interface` para definir contratos a cumplir entre clases
  </details>

  <details>
    <summary><h2>Clases abstractas</h2></summary>

  * Uso de `abstract` para definir clases abstractas que poseen atributos con metodos abstractos que definen un contrato a cumplir
  </details>

  <details>
    <summary><h2>Practica sobre polimorfismo con vectores polimorficos</h2></summary>
  </details>
</details>

<hr>
<details>
  <summary><h1>Clase 9 (Clase de Repaso y Consultas)</h1></summary>  

* Repaso sobre servidores
* Resolucion de problemas con docker
* Resolucion de problemas con PHP
* Repaso sobre Programacion Orientada a Objetos
* Herencia, Abstraccion y Polimorfismo
  
</details>

<hr>
<details>
  <summary><h1>Clase 10 (Namespace, Control de Excepciones y Autoloading)</h1></summary>  

  <details>
    <summary><h2>¿Que es el namespacing?</h2></summary>

  * Uso de `namespace` para definir un espacio de nombres
  </details>

   <details>
    <summary><h2>¿Como se controlan los errores?</h2></summary>

  * [Tipos de errores](https://cybmeta.com/tipos-de-errores-en-php)
    * Errores fatales: detienen el flujo de la aplicacion

      ```php
      <?php
      $objeto;
      # La declaracion de esta variable ha sido interpretada y se le ha asignado un valor nulo
      # Esto quiere decir que $objeto === null, por lo tanto sera un excepcion critica invocar
      # un metodo llamado 'obtenerNombre' en algo que esta vacio
      echo $objeto->obtenerNombre();
      ?>
      ```

    * Errores de warning: no detienen el flujo de la aplicacion, pero se mostrara un mensaje de advertencia

      ```php
      <?php
      $numerador = 5;
      $denominador = 0;
      # La division por cero aunque seria tratada en otros lenguajes como una excepcion
      # Aca se trabaja como un warning y se imprimira la palabra 'INF' como resultado
      echo $numerador/$denominador;
      ?>
      ```

    * Errores de Notice: son los errores mas bajos o de menor prioridad y por defecto no se muestran pero podria darse el caso de que se activen

      ```php
      <?php
      $name = "Manolo";
      //$nombre es una variable que no ha sido definida antes de su uso. Su valor es NULL.
      echo 'Tu nombre es ' . $nombre;
      ?>
      ```

  * Uso del `throw` para arrojar nuevos errores, ejemplo: `throw new Error('nuevo error');`
  * Uso del `try` y `catch` para poder manejar estos errores sin detener el flujo de la aplicacion
  * Uso del `finally` para ejecutar codigo que se requiera siempre

    ```php
      try {
        $numerador = 5;
        $denominador = 0;
        if ($numerador/$denominador === INF) {
            throw new Error('<br>Estas diviendo por cero y no se puede<br>');
        }
        echo $numerador/$denominador;
      } catch (\Throwable $error) {
          echo $error->getMessage();
      } finally {
          echo "<br>Se ha realizado la division<br>";
      }
    ```
  </details>

   <details>
    <summary><h2>¿Que es el autoloading?</h2></summary>

  * Estandares para el autoloading
    * [PSR-4](https://www.php-fig.org/psr/psr-4/)
  </details>

   <details>
    <summary><h2>Manejador de Codigo para PHP - <a href="https://medium.com/@deboj88/difference-between-pear-pecl-and-composer-6426223c55ff">PEAR, PECL and Composer</a></h2></summary>

  * PECL: (PHP Extension Community Library)
  * Composer: (PHP Package Manager)
  * PEAR: (PHP Package Manager - Deprecated)
  </details>

   <details>
    <summary><h2>Composer</h2></summary>

  * Instalacion de composer en host - [descargar](https://getcomposer.org/download/)
  * Instalacion de composer en docker - modificando `Dockerfile` con `COPY --from=composer:2.3 /usr/bin/composer /usr/bin/composer`
  * Iniciar un proyecto con `composer init`
  * Estructura de un proyecto con composer
  * Uso del archivo `.gitignore`
  </details>

   <details>
    <summary><h2>Practica para hacer uso de autoloading con `use` para las clases o funciones</h2></summary>
  </details>

</details>

<hr>
<details>
  <summary><h1>Clase 11 (Configuracion de Proyecto con Composer)</h1></summary>  

  <details>
    <summary><h2>Atributos de composer.json</h2></summary>

  * Autoload - Define el estandar a autocargar las clases
    * autoload - Indice como seran cargadas las clases en produccion
    * autoload-dev - Indica como seran cargadas las clases en el desarrollo, usada en el testing
      * PSR-4 - Indica que `namespace` sera el buscado y la carpeta donde se encuentra el codigo
  * Require - Define las distintas dependencias del proyecto
    * require - Indica aquellas librerias que seran cargadas en un entorno de produccion usando [versionado semantico](https://fperez217.medium.com/qu%C3%A9-es-versionamiento-sem%C3%A1ntico-bf495b9eb028) - [video](https://www.youtube.com/watch?v=hwlOuZvaDIA) - [Packagist Semver Checker](https://semver.madewithlove.com/?package=madewithlove%2Fhtaccess-cli&constraint=dev-main&stability=stable)
    * require-dev - Indica aquellas librerias que seran cargadas en un entorno de desarrollo, por ejemplo, `phpunit`
  * Scripts - Indica aquellos scripts que seran ejecutados directamente desde composer
    * `post-update-cmd` - Ocurre despues del comando de `composer update`
    * Se pueden customizar los distintos scripts a ejecutar en el proyecto
  </details>

  <details>
    <summary><h2>Agregando dependencias al proyecto</h2></summary>

  * Dependencia para manejar [peticiones HTTP](https://symfony.com/doc/current/components/http_foundation.html) - `composer require symfony/http-foundation`
  * Dependencia para manejar [testing](https://phpunit.de/getting-started/phpunit-9.html) en la app - `composer require --dev phpunit`
  </details>

  <details>
    <summary><h2>Practica para manejar peticiones por HTTP y realizando testing con script `composer test`</h2></summary>
  </details>
</details>


<hr>
<details>
  <summary><h1>Clase 12 (Configuracion del entorno de desarrollo)</h1></summary>  

  <details>
    <summary><h2>¿Que es un linter? ¿Para que me puede servir?</h2></summary>

  * [PHP-CS-Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer) (estandar actual)

    * `composer require --dev friendsofphp/php-cs-fixer`
    * `.php-cs-fixer.php`

    ```php
    <?php

    use PhpCsFixer\Config;
    use PhpCsFixer\Finder;

    $rules = [
        '@PSR12' => true,
        'array_syntax' => ['syntax' => 'short'],
        'binary_operator_spaces' => [
            'default' => 'single_space',
            'operators' => ['=>' => null]
        ],
        'blank_line_after_namespace' => true,
        'blank_line_after_opening_tag' => true,
        'blank_line_before_statement' => [
            'statements' => ['return']
        ],
        'braces' => true,
        'cast_spaces' => true,
        'class_attributes_separation' => [
            'elements' => [
              'method' => 'one',
              'trait_import' => 'none'
            ]
        ],
        'class_definition' => true,
        'concat_space' => [
            'spacing' => 'one'
        ],
        'declare_equal_normalize' => true,
        'elseif' => true,
        'encoding' => true,
        'full_opening_tag' => true,
        'fully_qualified_strict_types' => true,
        'function_declaration' => true,
        'function_typehint_space' => true,
        'heredoc_to_nowdoc' => true,
        'include' => true,
        'increment_style' => ['style' => 'post'],
        'indentation_type' => true,
        'linebreak_after_opening_tag' => true,
        'line_ending' => true,
        'lowercase_cast' => true,
        'constant_case' => true,
        'lowercase_keywords' => true,
        'lowercase_static_reference' => true,    
        'magic_method_casing' => true,
        'magic_constant_casing' => true,
        'method_argument_space' => true,
        'native_function_casing' => true,
        'no_alias_functions' => true,
        'no_extra_blank_lines' => [
            'tokens' => [
                'extra',
                'throw',
                'use'
            ]
        ],
        'no_blank_lines_after_class_opening' => true,
        'no_blank_lines_after_phpdoc' => true,
        'no_closing_tag' => true,
        'no_empty_phpdoc' => true,
        'no_empty_statement' => true,
        'no_leading_import_slash' => true,
        'no_leading_namespace_whitespace' => true,
        'no_mixed_echo_print' => [
            'use' => 'echo'
        ],
        'no_multiline_whitespace_around_double_arrow' => true,
        'multiline_whitespace_before_semicolons' => [
            'strategy' => 'no_multi_line'
        ],
        'no_short_bool_cast' => true,
        'no_singleline_whitespace_before_semicolons' => true,
        'no_spaces_after_function_name' => true,
        'no_spaces_around_offset' => true,
        'no_spaces_inside_parenthesis' => true,
        'no_trailing_comma_in_list_call' => true,
        'no_trailing_comma_in_singleline_array' => true,
        'no_trailing_whitespace' => true,
        'no_trailing_whitespace_in_comment' => true,
        'no_unneeded_control_parentheses' => true,
        'no_unreachable_default_argument_value' => true,
        'no_useless_return' => true,
        'no_whitespace_before_comma_in_array' => true,
        'no_whitespace_in_blank_line' => true,
        'normalize_index_brace' => true,
        'not_operator_with_successor_space' => false,
        'object_operator_without_whitespace' => true,
        'ordered_imports' => ['sort_algorithm' => 'alpha'],
        'phpdoc_indent' => true,
        'general_phpdoc_tag_rename' => true,
        'phpdoc_inline_tag_normalizer' => true,
        'phpdoc_tag_type' => true,
        'phpdoc_no_access' => true,
        'phpdoc_no_package' => true,
        'phpdoc_no_useless_inheritdoc' => true,
        'phpdoc_scalar' => true,
        'phpdoc_single_line_var_spacing' => true,
        'phpdoc_summary' => true,
        'phpdoc_to_comment' => true,
        'phpdoc_trim' => true,
        'phpdoc_types' => true,
        'phpdoc_var_without_name' => true,
        'psr_autoloading' => true,
        'self_accessor' => true,
        'short_scalar_cast' => true,
        'simplified_null_return' => false,
        'single_blank_line_at_eof' => true,
        'single_blank_line_before_namespace' => true,
        'single_class_element_per_statement' => true,
        'single_import_per_statement' => true,
        'single_line_after_imports' => true,
        'single_line_comment_style' => [
            'comment_types' => ['hash']
        ],
        'single_quote' => true,
        'space_after_semicolon' => true,
        'standardize_not_equals' => true,
        'switch_case_semicolon_to_colon' => true,
        'switch_case_space' => true,
        'ternary_operator_spaces' => true,
        'trailing_comma_in_multiline' => true,
        'trim_array_spaces' => true,
        'unary_operator_spaces' => true,
        'visibility_required' => [
            'elements' => ['method', 'property']
        ],
        'whitespace_after_comma_in_array' => true,
        'no_unused_imports' => true,
    ];


    $finder = Finder::create()
        ->in([
            __DIR__ . '/src',
            __DIR__ . '/tests',
        ])
        ->name('*.php')
        ->ignoreDotFiles(true)
        ->ignoreVCS(true);

    $config = new Config();
    return $config->setFinder($finder)
        ->setRules($rules)
        ->setRiskyAllowed(true)
        ->setUsingCache(true);
    ```

    * `composer.json`

    ```json
      ...,
      {
        "scripts":{
            ...
            "lint": "php-cs-fixer fix -vvv --show-progress=dots",
            ...

        }
      }
    ```

    * `.gitignore`

    ```.gitignore
    ...
    .php-cs-fixer.cache
    ...
    ```

  </details>

  <details>
    <summary><h2>Analizador de codigo</h2></summary>

  * [PHPStan](https://phpstan.org/)

    * `composer require --dev phpstan/phpstan`
    * `phpstan.neon`

    ```neon
    parameters:
    
      level: 9
  
      paths:
          - src
          - tests
          
      inferPrivatePropertyTypeFromConstructor: true
      checkMissingIterableValueType: false
    ```
    * `composer.json`

    ```json
      ...,
      {
        "scripts":{
            ...
            "analyse": "phpstan analyse -c phpstan.neon",
            ...

        }
      }
    ```


  </details>

  <details>
    <summary><h2>Test unitarios con PHPUnit</h2></summary>

  * [PHPUnit](https://phpunit.de/getting-started/phpunit-9.html) (mas usado)

    * `composer require --dev phpunit/phpunit`
    * `composer.json`

    ```json
      ...,
      {
        "scripts":{
            ...
            "test": "phpunit tests",
            ...

        }
      }
    ```


  </details>

  <details>
    <summary><h2>Generador de documentacion de codigo PHP</h2></summary>

  * Necesario trabajar con PHPDocs
  * [PHPDoc](https://www.phpdoc.org/) (recomandable usarlo con docker)

    ```docker
    # La variable PWD contiene la ruta actual, podria usarse ${PWD} o el comando $(pwd)
    docker run --rm -v ${PWD}:/data phpdoc/phpdoc:3 --config phpdoc.xml
    ```

    * `phpdoc.xml`
    
    ```xml
    <?xml version="1.0" encoding="UTF-8" ?>
    <phpdocumentor
            configVersion="3"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xmlns="https://www.phpdoc.org"
    >
        <title>Documentacion de mi proyecto</title>
        <paths>
            <output>docs</output>
        </paths>

    </phpdocumentor>
    ```

    * `.gitignore`
    
    ```.gitignore
    ...
    .phpdoc
    ....
    ```

  </details>
</details>

<hr>
<details>
  <summary><h1>Clase 13 (Wrappers de PHP)</h1></summary>  

  <details>
    <summary><h2>¿Que es un wrapper?</h2></summary>

  * [Protocolos y Envolturas](https://www.php.net/manual/es/wrappers.php)
  </details>

  <details>
    <summary><h2>Wrapper <a href="https://www.php.net/manual/es/wrappers.php.php">php://</a></h2></summary>

  * `php://input` - Flujo de entrada de solo lectura con el contenido del usuario en el caso de peticiones `POST`
  * `php://output` - Flujo de solo escritura que permite escribir en el buffer (memoria ram) de salida tal como lo hacen `print` y `echo`.
  * `php://temp` - Flujo de lectura y escritura pero almacenara los datos en memoria (disco solido o rigido), util para guardar archivos temporales como imagenes o archivos que envia el usuario, la ubicacion de la carpeta donde se guardan temporalmente se puede saber invocando la funcion `sys_get_temp_dir()`
    * Importante: `php://memory` y `php://temp` no son reutilizabes, esto es, despues de que los flujos hayan sido cerrados, no hay forma de hacer referencia a ellos de nuevo

     ```php
     <?php
     file_put_contents('php://memory', 'PHP');
     echo file_get_contents('php://memory'); // no imprime nada
     ```
  </details>

  <details>
    <summary><h2>Practica para extraer imagen del usuario usando un formulario</h2></summary>

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
        <form method="post" action="/upload.php" enctype="multipart/form-data">
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

</details>

<hr>

<details>
  <summary><h1>Clase 14 (Enrutamiento dinamico)</h1></summary>  

  <details>
    <summary><h2>¿Que es enrutamiento dinamico?</h2></summary>

  * Habilitar enrutamiento dinamico en `apache` con archivo `.htaccess`
    * Creando archivo `.htaccess` para activar sobreescritura de directivas:

      ```yml
      # Habilitamos el dynamic routing con una Fallback
      # Esto hara match con aquellas rutas que no se han definido y seran mostradas usando el index.php
      FallbackResource index.php
      ```
      
  </details>

  <details>
    <summary><h2>Introduccion a API REST</h2></summary>

  * ¿Que es una API REST?
    * API (Interface de la Aplicacion)
    * REST (Transferencia de Estado Representacional)
      * Respuesta de endpoints (URI y Verbo) mediante uso de JSON
    * Cabeceras de respuesta
      * `Content-Type: application/json` vs `Content-Type: text/html;`
  </details>

  <details>
    <summary><h2>Practica para crear enrutamiento dinamico usando peticiones `GET` y `POST`</h2></summary>

  * Concepto de Controlador en las rutas
  </details>
  
</details>

<hr>
<details>
  <summary><h1>Clase 15 (Introduccion a MVC)</h1></summary>

  <details>
    <summary><h2>¿Que es MVC?</h2></summary>

  * Explicacion sencilla basada en arquitectura de videojuegos
  * Concepto de Rutas
  * Concepto de Controlador
  * Concepto de Modelo
  * Concepto de Vista

  </details>

  <details>
    <summary><h2>¿Que es un ORM? ¿Que es un ODM? <a href="https://es.acervolima.com/diferencia-entre-rdbms-y-oodbms/">Diferencias</a></h2></summary>

  * [ORM](https://www2.deloitte.com/es/es/pages/technology/articles/que-es-orm.html) (Object Relational Mapper - Mapeador de Relaciones de Objetos)
    * [Eloquent](https://github.com/illuminate/database), [Doctrine](https://www.doctrine-project.org/projects/doctrine-orm/en/2.11/tutorials/getting-started.html), ...
      * RDBMS (Relational DataBase Management System - Sistema Gestor de Base de Datos Relaciones)
        * MySQL
        * PostgreSQL
        * SQL Server
        * Oracle
        * Microsoft Access
        * ...
  * ODM (Object Documents Mapper - Mapeador de Documentos de Objetos)
    * [Doctrine](https://github.com/doctrine/mongodb-odm), [Eloquent (driver)](https://github.com/jenssegers/laravel-mongodb)
      * [OODBMS](https://www.acens.com/wp-content/images/2014/02/bbdd-nosql-wp-acens.pdf) (Object Oriented DataBase Management System - Sistema Gestor de Base de Datos Orientada a Objetos)
        * MongoDB
        * DynamoDB
        * Cassandra
        * Redis
        * CouchDB
  </details>
  <details>
    <summary><h2>Introduccion a Eloquent ORM</h2></summary>

  * Extensiones necesarias 
    * pdo_mysql
    
    ```Dockerfile
    # Usando el parametro -j le decimos la velocidad de instalacion y que sera de
    # acuerdo a la cantidad de numero de procesamiento que tenga que sera $(nproc)
    # Instalamos entonces las extensiones mysqli, pdo y pdo_mysql para poder comunicarnos
    # con la base de datos de MySQL
    RUN docker-php-ext-install -j$(nproc) \
            mysqli \
            pdo \
            pdo_mysql \
    ```
  * `docker-compose up -d --build`
    * Volvemos a levantar todos los contenedores pero con la nueva imagen actualizada
  * `composer require illuminate/database`
  * Creacion del primer modelo para una lista de tareas

    ```php
    <?php

    /**
     * Cargamos el autoloader de composer que se encuentra en la carpeta 'vendor'
    */
    require_once __DIR__.'/../vendor/autoload.php';

    /**
     * Cargamos la clase Manager como Capsule
    */
    use Illuminate\Database\Capsule\Manager as Capsule;

    /**
     * Creamos una instancia del Manager
    */
    $capsule = new Capsule;

    /**
     * Añadimos la informacion para la conexio a la base de datos local
     * El host es 'mysql' debido a que si es como tiene comunicacion con el otro contenedor
     * Usamos las credenciales que le habiamos asignado
    */
    $capsule->addConnection([
        'driver' => 'mysql',
        'host' => 'mysql',
        'database' => 'course',
        'username' => 'user',
        'password' => 'user',
        'charset' => 'utf8',
        'collation' => 'utf8_unicode_ci',
        'prefix' => '',
    ]);

    /**
     * Esto asegura que todos los metodos estaticos de conexio a modelos
     * Sean ejecutados directamente en esta 'capsula' de base de datos
    */
    $capsule->setAsGlobal();

    /**
     * Arrancamos a Eloquent para que se conecte a la base de datos
    */
    $capsule->bootEloquent();

    /**
     * Creamos una tabla llamada 'users' que contendra los campos
     * @var int id (incremental)
     * @var string email (unico en la tabla)
     * @var string todo (una lista de tareas)
     * @var timestamps agrega dos columnas 'created_at' y 'updated_at' en la tabla 
    */
    Capsule::schema()->create('users', function ($table) {
      $table->increments('id');
      $table->string('email')->unique();
      $table->string('todo');
      $table->timestamps();
    });

    /**
     * Clase usada para representar los datos del usuario
    */
    class User extends Illuminate\Database\Eloquent\Model {
      /**
       * La tabla que sera asociada al modelo
       * @var string
      */
      protected $table = 'users';
    }

    /**
     * Creamos una nueva instancia de nuestro modelo para poder asignarle datos
    */
    $user = new User();
    /**
     *  Le asignamos el valor a los atributos del modelo 
    */
    $user->email = "ejemplo@ejemplo.com";
    $user->todo = "sacar a pasear al perro";
    /** 
     * Procedemos a guardar esa informacion
    */
    $user->save();

    /**
     * Luego de guardados los datos procedemos a traerlos con el metodo all();
     * Procedemos posteriormente a mostrarlos por pantalla
    */
    $users = User::all();

    foreach($users as $user)
    {
      echo "$user->email - $user->todo <br>";
    }
    ```

  </details>

  <details>
    <summary><h2>¿Que son las migraciones?</h2></summary>

  * Crear tablas
  * Modificar tablas
  * Regresar tablas
  </details>
</details>

<hr>
<details>
  <summary><h1>Clase 16 (Modelos)</h1></summary>
  <details>
      <summary><h2>Modelo para usuario</h2></summary>

  * 
    ```php
    <?php

    use Illuminate\Database\Capsule\Manager as Capsule;

    Capsule::schema()->create('users', function ($table) {
      $table->increments('id');
      $table->string('email')->unique();
      $table->timestamps();
    });
    ```

  * 
    ```php
    <?php

    use Illuminate\Database\Eloquent\Model;
    /**
     * Clase usada para representar los datos del usuario
    */
    class User extends Model {
      /**
       * La tabla que sera asociada al modelo
       * @var string
      */
      protected $table = 'users';

      /**
       * Accedemos a las lista de tareas de este usuario
       * por medio de una relacion de Uno a Muchos - (One to Many)
       * lo que hacemos aca es devolver una instancia del modelo Todo
       * pero que coincidan el 'user_id' con el 'id' del usuario
       * @return array{Todo}
       * 
      */
      public function todos()
      {
        return $this->hasMany(Todo::class, 'user_id', 'id');
      }
    }
    ```

  </details>

  <details>
      <summary><h2>Modelo para tareas y su relacion</h2></summary>

  * 
    ```php
    <?php

    use Illuminate\Database\Capsule\Manager as Capsule;

    Capsule::schema()->create('todos', function ($table) {
      /**
       * Crea una columna incremental para un identificador unico de la tarea
      */
      $table->id();
      /**
       * Crea una relacion mediante una llave foranea llamada 'user_id'
       * Asi de esta manera estamos conectando esta tabla con la tabla 'users'
       * Le decimos que cuando se elimine el usuario tambien se eliminara este dato
      */
      $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
      /**
       * Esta propiedad de un texto le decimos un maximo de caracteres a insertar
       * y que ademas puede tener datos o no, es decir, es nullable
      */
      $table->string('text', 100)->nullable();
      $table->timestamps();
    });
    ```

  * 
    ```php
    <?php

    use Illuminate\Database\Eloquent\Model;
    /**
     * Clase usada para representar las tareas por hacer del usuario
     * Los modelos son declarados en SINGULAR
    */
    class Todo extends Model {
      /**
       * La tabla que sera asociada al modelo
       * @var string
      */
      protected $table = 'todos';
      /**
       * Accedemos al usuario por medio de una relacion de Uno a Muchos - (One to Many)
       * pero en este caso en el sentido contrario que seria de pertenencia
       * @return User
      */
      public function user()
      {
        return $this->belongsTo(User::class, 'user_id', 'id');
      }
    }
    ```
  </details>

   <details>
      <summary><h2>Practica CRUD para una lista de tareas</h2></summary>
    
  * CRUD - Create, Read, Update and Delete (Crear, Leer, Actualizar y Eliminar)
    </details>
</details>

<hr>
<details>
  <summary><h1>Clase 17 (Clase de Repaso y Consultas)</h1></summary>

  * Inconvenientes con Docker y MySQL
  * Dudas sobre Eloquent ORM
  * Realizacion de mini proyecto usando CRUD para una lista de tareas

</details>

<hr>
<details>
  <summary><h1>Clase 18 (Seguridad en Aplicaciones)</h1></summary>

  
  <details>
      <summary><h2>¿Como hacer un registro de usuarios?</h2></summary>

  * Formulario de Registro con correo y contraseña
  * Estandar de encriptacion de contraseñas
    * Bcrypt
      * [password_hash()](https://www.php.net/manual/es/function.password-hash.php)
      * [password_verify()](https://www.php.net/manual/es/function.password-verify.php)
  </details>

  <details>
    <summary><h2>¿Como hacer un login de usuarios?</h2></summary>
   
   * Formulario de Login con correo y contraseña
   * Estandar de verificacion por token
    * [JWT](https://jwt.io/) (Json Web Token)
      * [Librerias](https://jwt.io/libraries?language=PHP)
        * `composer require firebase/php-jwt`

        ```php
        use Firebase\JWT\JWT;
        use Firebase\JWT\Key;

        $key = 'ejemplo de clave ultra secreta';
        $payload = [
            'name' => 'pedro perez',
            'email' => 'ejemplo@ejemplo.com',
        ];

        /**
        * IMPORTANT:
        * You must specify supported algorithms for your application. See
        * https://tools.ietf.org/html/draft-ietf-jose-json-web-algorithms-40
        * for a list of spec-compliant algorithms.
        */
        $jwt = JWT::encode($payload, $key, 'HS256');
        $decoded = JWT::decode($jwt, new Key($key, 'HS256'));

        print_r($decoded);

        /*
        NOTE: This will now be an object instead of an associative array. To get
        an associative array, you will need to cast it as such:
        */

        $decoded_array = (array) $decoded;

        /**
        * You can add a leeway to account for when there is a clock skew times between
        * the signing and verifying servers. It is recommended that this leeway should
        * not be bigger than a few minutes.
        *
        * Source: http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html#nbfDef
        */
        JWT::$leeway = 60; // $leeway in seconds
        $decoded = JWT::decode($jwt, new Key($key, 'HS256'));
        ```

      * Uso de cabeceras para asignar el token de sesion iniciada
        * Por cookies:
          * [setcookie()](https://www.php.net/manual/es/function.setcookie.php)  
        * Por cabecera personalizada:
          * [header()](https://www.php.net/manual/es/function.header.php)

          ```php
          <?php
          header('X-Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...');
          ```

   </details>

  <details>
    <summary><h2>¿Como validar credenciales validas?</h2></summary>
  

  * Luego de ser enviado el formulario de login, podriamos asignarle una **cookie de sesion**
  * Esta **cookie** contendra el **JWT** que le permite el acceso a todos los recursos de la app
    * Uso de la variable `$_COOKIE` para obtener el token, extraer la informacion que se ha firmado y asi buscarla en la base de datos y tener los datos del usuario
    * Para hacer [redireccionamiento](https://stackoverflow.com/questions/768431/how-do-i-make-a-redirect-in-php) podriamos hacer uso de la cabecera `Location`

  </details>

</details>

<hr>
<details>
  <summary><h1>Clase 19 (Vinculacion de Registro, Login y Todos)</h1></summary> 
   
  <details>
    <summary><h2>Incorporacion de Frameworks de diseño</h2></summary>
    
  * [PicoCSS](https://picocss.com/)
  * [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/download/)
  * [Materialize](https://materializecss.com/getting-started.html)
  </details>

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
  <summary><h1>Clase 20 (Transformacion a API REST)</h1></summary> 
   
  <details>
    <summary><h2>Registro en una API REST</h2></summary>
  
  * Uso de versionado en las rutas
    * `/api/v2.5/auth/register`
  * Request body con informacion a registrar
    
    ```json
    {"email": "ejemplo@ejemplo.com", "password": "ejemplo"}
    ```

  * Response body con la informacion registrada 
    
    ```json
    {"message": "usuario registado satisfactoriamente"}
    ```
  </details>

  <details>
    <summary><h2>Inicio de sesion en una API REST</h2></summary>

  * Uso de versionado en las rutas
    * `/api/v2.5/auth/register`
  * Request body con informacion para hacer login
    
    ```json
    {"email": "ejemplo@ejemplo.com", "password": "ejemplo"}
    ```

  * Response body con la informacion del logueo 
    
    ```json
    {"message": "usuario logueado satisfactoriamente", "body": {"token":"jsonwebtoken"}}
    ```

  </details>

  <details>
    <summary><h2>Consumo de recursos de la API REST</h2></summary>

  * Al consumir un recurso, por ejemplo `/api/v2.5/movies`, necesitamos mandar nuestras credenciales haciendo el uso del token del login
  * Enviando el `jsonwebtoken` del login
    * Viajando como uri params

      ```json
      /api/v2.5/movies?apikey=mitoken
      ```

    * Viajando como body request

      ```json
      {
        ...,
        "token":"mitoken",
        ...
      }
      ```

    * Viajando como cookie headers

      ```
      Cookie: JWT=mitoken
      ```

    * Viajando como baerer token headers

      ```
      Authorization: Bearer mitoken
      ```
  </details>

</details>

<hr>
<details>
  <summary><h1>Clase 21 (Consumo de API REST)</h1></summary> 
   
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
    <summary><h2>Practica de consumo de API REST con Javascript Vanilla</h2></summary>
  </details>

</details>

<hr>
<details>
  <summary><h1>Clase 22 (Despliegue con Heroku)</h1></summary> 
   
  <details>
    <summary><h2>Configurando Base de Datos</h2></summary>

  * Base de datos gratuita
    * [PostgreSQL](https://devcenter.heroku.com/articles/heroku-postgresql#connecting-to-heroku-postgres)
      * [connection](https://devcenter.heroku.com/articles/connecting-heroku-postgres#connecting-with-laravel)
  </details>

  <details>
    <summary><h2>Configurando Aplicacion</h2></summary>

  * Uso de [composer](https://devcenter.heroku.com/articles/getting-started-with-php#declare-app-dependencies)
  * Uso de [Procfile](https://devcenter.heroku.com/articles/getting-started-with-php#define-a-procfile)
  * Uso de logs en el [php://stderr](https://www.php.net/manual/en/features.commandline.io-streams.php)
    
    ```php
    <?php
    file_put_contents("php://stderr", "Ha ocurrido un error");
    ```
  </details>

  <details>
    <summary><h2>Realizando despliegue</h2></summary>

  * Control de errores con [heroku cli](https://devcenter.heroku.com/articles/heroku-cli#get-started-with-the-heroku-cli)
  * Configurando variables de entorno
  </details>
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
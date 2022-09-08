# Sockets 

- En los puertos corren los servicios que en lenguaje tecnico es conocido como sockets

<hr>

# Netcat 

- Netcat es una herramienta de red que permite  a través de intérprete de 
    comandos y con una sintaxis sencilla abrir puertos TCP/UDP en un HOST,
    asociar una shell a un puerto en concreto y forzar conexiones UDP/TCP.

<hr>

# Sala de chat

- https://hub.docker.com/r/gophernet/netcat

- Comenzamos un servidor de chat en una terminal

    ```
    docker run -it --rm -p 8888:8888 gophernet/netcat -vl -p 8888
    ```

    - El comando run arrancara desde cero un contenedor 
        con una imagen `gophernet/netcat` usando los parametros `-vl -p 8888` para netcat
        * `-it` es para que sea interactivo, es decir, no se cierre
        * `--rm` es para que luego de ejecutado se elimine el contenedor
        * `-p 8888:8888` es para hacer mostrar el puerto del host con el contenedor 
        * `--network=host` es para especificar que la red sea la misma que la maquina

- Conectamos un cliente para el chat hacia el servidor en otra terminal

    
    ```
    docker run -it --rm --network=host gophernet/netcat localhost 8888
    ```

<hr>

# Servidor Web

- Para levantar un servicio (socket) con netcat utilizando docker lo hacemos
    ejecutando un contenedor:

- Creamos el contenedor e interactuamos con el:

    ```
    docker run -it --rm -p 8888:8888 gophernet/netcat -vl -p 8888
    ```

- Vamos hacia él en un navegador y recibiremos un mensaje, que sera la peticion, algo parecido a:

    ```
    GET / HTTP/1.1
    Host: localhost:8888
    ...
    ```

- Luego lo que haremos sera escribirle el mensaje de respuesta que seria:

    ```
    HTTP/1.1 200 OK
    Content-Type: text/html
    
    <h1>Hola Mundo</h1>
    ```

Para detener el proceso lo hacemos presionando la tecla `Ctrl + C`


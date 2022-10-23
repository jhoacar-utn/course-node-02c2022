-- Este archivo sera ejecutado cuando el contenedor
-- se vaya a levantar desde cero y creara la siguiente configuracion

-- Creamos una base de datos llamada 'utn' 
-- por la cual nos conectaremos con la aplicacion
CREATE DATABASE IF NOT EXISTS utn;

-- Creamos un usuario el cual manejara esta base de datos
CREATE USER utn@'%' IDENTIFIED BY 'utn';
-- Le damos todos los permisos en esa base de datos al usuario
GRANT ALL ON utn.* TO utn@'%';

-- Creamos una nueva tabla para la base de datos
-- El requisito principal es agregarle almenos una columna
CREATE TABLE IF NOT EXISTS utn.ejemplo (tiene_que_existir_porque_si VARCHAR(20));

-- Podemos cambiar la columna que creamos para decirle que
-- Sera una columna con nombre mensaje, un maximo de 100 caracteres
-- Y por defecto tendra un valor nulo
ALTER TABLE utn.ejemplo CHANGE tiene_que_existir_porque_si mensaje VARCHAR(100) NULL;

-- Luego de agregada la columna a la tabla en la base de datos
-- Vamos a insertar contenido a la tabla de ejemplo en la columna mensaje
-- En este caso insertamos un 'hola mundo'
INSERT INTO utn.ejemplo (mensaje) VALUES ('hola mundo'); 


/**
 * Este archivo sera ejecutado cuando el contenedor
 * se vaya a levantar desde cero y creara la siguiente configuracion
 */

/**
 * Creamos una base de datos llamada 'utn' 
 * por la cual nos conectaremos con la aplicacion
 */
db = db.getSiblingDB("utn");

const user = "utn"
const password = "utn"
const database = "utn"
const collection = "ejemplo"
const index = "mensaje"
const document = "hola mundo"


/**
 * Creamos un usuario el cual manejara esta base de datos
 */
const userInfo = {
    user: user,
    pwd: password,
    /**
     * Le damos todos los permisos en esa base de datos al usuario
    */
    roles: [{ role: "readWrite", db: database }]
}

db.createUser(userInfo)

/**
 * Creamos una nueva coleccion para la base de datos
 */
db.createCollection(collection);

/**
 * Esta variable content sera el nuevo contenido en la coleccion
 */
const content = {}
content[index] = document

/**
 * Insertamos un nuevo documento con su correspondiente indice 
 * que seria:
 *      - "mensaje": "hola mundo"
 */
db[collection].insertOne(content);
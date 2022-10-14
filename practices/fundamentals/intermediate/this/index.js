const fs = require("fs");
const Emoji = require("./modelo");

/**
 * Para añadir una nueva propiedad
 * a una clase que sera instanciada 
 * o creada con el operador 'new'
 * se le debera añadir al .prototype
 */
Emoji.prototype.delete = function(){
    console.log("Estoy borrando todo");
    fs.unlinkSync(this.file);
}

const sonrisa = new Emoji('😂','carcajada',0);

sonrisa.save();
sonrisa.delete();
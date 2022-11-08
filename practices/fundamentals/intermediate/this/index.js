const fs = require('fs');
const Emoji = require('./modelo');

function remove() {
  console.log('Estoy borrando todo');
  fs.unlinkSync(this.file);
}
/**
 * Para añadir una nueva propiedad
 * a una clase que sera instanciada
 * o creada con el operador 'new'
 * se le debera añadir al .prototype
 */
Emoji.prototype.delete = remove;

const sonrisa = new Emoji('😂', 'carcajada', 0);

sonrisa.save();
sonrisa.delete();
sonrisa.save();
/**
 * Metodos para invocar funciones con un contexto
 * .bind
 * .call
 * .apply
 */
remove.call(sonrisa);

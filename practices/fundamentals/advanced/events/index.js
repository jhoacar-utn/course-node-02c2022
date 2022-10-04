/**
 * Podriamos relacionar la programacion asincrona a partir de eventos,
 * como aquellas funciones que se ejecutaran luego de una accion
 * - Podemos interpretarlo tambien con el concepto de gancho (hook)
 * https://www.w3schools.com/nodejs/nodejs_events.asp
 */

const events = require('events');
const eventEmitter = new events.EventEmitter();

// Create an event handler
const myEventHandler = function () {
    console.log('I hear a scream!');
}

// Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

// Fire the 'scream' event:
eventEmitter.emit('scream');
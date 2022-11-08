const AwaitEventEmitter = require('await-event-emitter').default;

const isPromise = require('is-promise');

const TYPE_KEY_NAME = typeof Symbol === 'function' ? Symbol.for('--[[await-event-emitter]]--') : '--[[await-event-emitter]]--';

function assertType(type) {
  if (typeof type !== 'string' && typeof type !== 'symbol') {
    throw new TypeError('type is not type of string or symbol!');
  }
}

class EventEmitter extends AwaitEventEmitter {
  /**
     *
     * @param {string | any} type
     * @param  {...any} args
     * @returns
     */
  async* emit(type, ...args) {
    assertType(type);
    const listeners = this.listeners(type);
    const onceListeners = [];
    if (listeners && listeners.length) {
      for (let i = 0; i < listeners.length; i++) {
        const event = listeners[i];
        const rlt = event.apply(this, args);
        if (isPromise(rlt)) {
          // eslint-disable-next-line no-await-in-loop
          yield await rlt;
        }
        if (this._events[type] && this._events[type][i] && this._events[type][i][TYPE_KEY_NAME] === 'once') {
          onceListeners.push(event);
        }
      }
      onceListeners.forEach((event) => this.removeListener(type, event));
    }
  }
}

module.exports = EventEmitter;

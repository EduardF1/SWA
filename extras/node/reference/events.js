const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter{}

// Initialize object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', ()=>console.log('Event fired!'));
// Init Event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
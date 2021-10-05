const Logger = require('./logger');

const logger = new Logger();
logger.on('message', (data) => console.log('Called Listener: ', data));
logger.log('Hello from the other side...');
logger.log('Japan extends overseas...');
logger.log('Unser liebe fraue...');
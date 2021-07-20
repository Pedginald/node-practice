// Get back the class
// if you want custom extend from class
// otherwise just for emitting and handling events create instance
const eventEmitter = require('events');

const customEmitter = new eventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
	console.log(`Data received user ${name} with id: ${id}`);
})

customEmitter.on('response', () => {
	console.log('Some other logic here');
})

customEmitter.emit('response', 'John', 34);
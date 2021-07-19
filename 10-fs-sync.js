const { readFileSync, writeFileSync } = require('fs');

console.log('Starting task');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/subfolder/test.txt', 'utf8');

writeFileSync(
	'./content/result-sync.js',
	`Here is the result: ${first}, ${second}`,
	{ flag: 'a' }
)
console.log('Done with this task');
console.log('Starting next task');
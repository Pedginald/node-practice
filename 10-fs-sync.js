const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/subfolder/test.txt', 'utf8');

writeFileSync(
	'./content/result-sync.js',
	`Here is the result: ${first}, ${second}`,
	{ flag: 'a' }
)
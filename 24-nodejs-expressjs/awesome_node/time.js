
const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
	console.time('readFileTimer');	
	if (err) {
		console.log('error');
	} else {
		console.log('async', data.toString());
	}
	console.timeEnd('readFileTimer');	
});

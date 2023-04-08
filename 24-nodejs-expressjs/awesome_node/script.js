
const fs = require('fs');

// async method
fs.readFile('./hello.txt', (err, data) => {
	if (err) {
		console.log('error');
	} else {
		console.log('Async', data.toString('utf8'));
	}
});

// sync method
const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());

// append to file
fs.appendFile('hello.txt', ' This is so cool!', (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('File removed');
	}
});

// write to file
fs.writeFile('bye.txt', 'Goodbye! sad to see you go!', (err) => {
	if (err) {
		console.log(err);
	}
});


// delete
fs.unlink('./bye.txt', (err) => {
	if (err) {
		console.log(err);
	}
});

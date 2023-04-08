const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// ===== get =====
app.get('/', (req, res) => {
	// query
	console.log(req.query);
	console.log('req.query: ' + JSON.stringify(req.query));

	// body
	console.log(req.body);
	
	// header
	console.log(req.header);

	// params
	console.log(req.params);

	res.send('get root');
});

app.get('/profile', (req, res) => {
	const user = {
		name: 'John',
		hobby: 'Soccer'
	}
	res.send(user);
});

// ===== post =====

app.post('/profile', (req, res) => {
	console.log(req.body);
	res.send('Success');
});

app.listen(3000);


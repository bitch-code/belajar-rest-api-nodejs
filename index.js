const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/user', (req, res) => {
	res.send({
		message: 'CREATE NEW USER: POST /user ',
		body: req.body
	});
});

app.get('/user', (req, res) => {
	res.send('GET USER LIST: GET /user');
});

app.get('/user/:id', (req, res) => {
	res.send('GET USER: GET /user' + req.params.id);
});

app.patch('/user/:id', (req, res) => {
	const msg = {
		message: 'UPDATE USER: PATCH /user/' + req.params.id,
		body: req.body
	};
	res.send(msg);
});

app.delete('/user/:id', (req, res) => {
	res.send('DELETE USE: DRLETE /user/' + req.params.id);
});

/*
app.post('/login', (req, res) => {
	
})*/

/*app.get('/helloworld', (req, res) =>{
	res.send('Hello World!')
});*/

app.listen(port, () => {
	console.log(`cli-nodejs-api listening ay http://localhost:${port}`)
});



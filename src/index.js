const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./api');

const env = process.env.NODE_ENV || 'dev';
const PORT = 3000;

const app = express();

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })
	.then(
			() => {console.log('Database is connected') },
		err => { console.log('Cannot connect to the database'+ err)}
	);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

const server = app.listen(PORT, () => {
	console.log(`Server is up on port ${PORT}`);
	console.log(`Mode: ${env}`);
});

module.exports = server;
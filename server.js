const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const items = require('./routes/api/items');
const path = require('path');

const app = new express();
const db = keys.mongoURI;

mongoose
	.connect(db)
	.then(() => {
		console.log('Connected');
	})
	.catch(err => {
		console.log(err);
	});

app.use('/api/items', items);

app.use(express.json());

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	//Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Running at ${PORT}`));

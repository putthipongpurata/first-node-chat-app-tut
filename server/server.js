const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;


var app = express();

app.use(express.static(publicPath));

app.listen(port, (err) => {
	if(err){
		console.log('Unable to connect server')
	}
	console.log(`Server in up on port ${port}`);
});
var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true}));

app.set("view engine", "ejs");

var Animal = require('./Animal.js');
var Toy = require('./Toy.js');



app.use("/findToy", (req, res) => {
	var query = {};
	if (req.query.id) {
		query.id = req.query.id;
	}
	if (req.query.name) {
		query.name = req.query.name;
	}
	if( req.query.price) {
		query.price = req.query.price;
	}

	if(Object.keys(query).length != 0) {
		Toy.find(query, (err, toys) => {
			if (!err) {
				res.json(toys);
			} else {
				res.json({});
			}
		});
	} else {
		res.render("findToy");
	}
});

app.use("/", express.static("files"));

app.listen(3000, () => {
	console.log('Listening on port 3000');
});



// Please do not delete the following line; we need it for testing!
module.exports = app;
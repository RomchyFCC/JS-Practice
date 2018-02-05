var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true}));

app.set("view engine", "ejs");

var Animal = require('./Animal.js');
var Toy = require('./Toy.js');


app.use('/...', (req, res) => {
	//res.json({ msg : 'It works!' });
	res.redirect("/public/personForm.html");
    });

/*
app.use("/handleForm", (req, res) => {
	var name = req.body.username; // because name of the field was username
	var animals = [].concat(req.body.animal); // this could be an array
	res.type("html").status(200);
	res.write("hello, "+name+"how you doin?");
	res.write("these are the animals you prefer: you animalist!</p>");
	res.write("<ul>");
	animals.forEach((animal) => {
	res.write("<li>"+animal+"</li>");
	});
	res.write("</ul>");
	res.write('<a href="/public/form.html">'+ "back to form</a>");
	res.end();

	//res.send("done");
});

or -->

app.set("view engine", "ejs");

app.use("/handleForm", (req, res) => {
	var name = req.body.username;
	var animals = [].concat(req.body.animal);
	res.render("showAnimals", {name: name, animals: animals});
});

and now for the EJS file

Hello, <%= name %>.
<p>You animalist, here are your animals:</p>
<ul>
<% animals.forEach((animal) => {%>
	<li><%= animal %></li>
<% }) %>
</ul>
<a href="/public/form.html">Back</a>

---------------------------------------------

// what is this, is the app.get correct???
app.get("/", (req, res) => {
	res.render("showAnimals", {username: "Romchy"});
});

app.use("/", (req, res) => {
	res.write("hello world");
	res.send("hello world");

	var name = req.query.name; // e.g. /?name=Romchy
	res.status(200).type("html");

	if (name) {
	res.write("Hi " + name + "welcome");
	} else {
	res.write("hi, guest");
	}
	res.end();
});
*/
//app.use (/*default*/ (req, res) => {
/*	res.status(404).send("page not found"); or res.status(404).sendFile(__dirname + "/404.html");
});

app.use ("/public", express.static("files"));

*/
app.use("/public", express.static("files"));

/*app.use("/create", (req, res) => {
	var name = req.body.name;
	var age = req.body.age;
	res.type("html").status(200);
	res.write("Good job, we created the person!");
	res.write("<p>Name:</p>");
	res.write(name);
	res.write("<p>Age:</p>");
	res.write(age);
	res.write('<a href="/public/personForm.html">'+ "back to form</a>");
	res.end();
});*/

app.use("/create", (req, res) => {
	var newAnimal = new Animal ({
		name: req.body.name,
		species: req.body.species,
		breed: req.body.breed,
		gender: req.body.gender,
		traits: req.body.traits,
		age: req.body.age
	});
	newAnimal.save((err) => {
		if (err) {
			res.type("html").status(500);
			res.send("Error: " + err);
		} else {
			res.render("created", {animal: newAnimal});
		}
	});
});

app.use("/all", (req, res) => {
	Animal.find((err, allAnimals) => {
		if (err) {
			res.type("html").status(500);
			res.send("Error: " + err);
		} else if (allAnimals.length == 0) {
			res.type("html").status(200);
			res.send("there are no animals");
		} else {
			res.render("showAll", {animals: allAnimals});
		}
	});
});

app.use("/animal", (req, res) => {
	var searchName = req.query.name;
	Animal.findOne({name: searchName}, (err, animal) => {
		if (err) {
			res.type("html").status(500);
			res.send("Error: " + err);
		} else if (!animal) {
			res.type("html").status(200);
			res.send("no animal named " + searchName);
		} else {
			res.render("showAnimal", {animal: animal});
		}
	});
});

app.use("/update", (req, res) => {
	var updateName = req.body.username;
	Animal.findOne({name: updateName}, (err, animal) => {
		if (err) {
			res.type("html").status(500);
			res.send("Error: " + err);
		} else if (!animal) {
			res.type("html").status(200);
			res.send("no animal named " + updateName);
		} else {
			animal.age = req.body.age;
			animal.save((err) => {
				if (err) {
					res.type("html").status(500);
					res.send("Error: " + err);
				} else {
					res.render("updated", {animal: animal});
				}
			});
		}
	});
})

app.listen(3000, () => {
	console.log('Listening on port 3000');
});



// Please do not delete the following line; we need it for testing!
module.exports = app;
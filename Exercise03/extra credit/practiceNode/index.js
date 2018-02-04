var express = require("express");
var app = express();

app.use("/name", (req, res) => {
	var name = req.query.name;

	res.status(200).type("html");

	if (name) {
		res.write("Hi " + name + " welcome back!");
	} else {
		res.write("welcome guest");
	}
	res.end();
	//res.send("Hello World");
});
app.use("/public", express.static("files"));

app.use("/about", (req, res) => {
	res.send("this is the about page");
});

app.use(/*default*/ (req,res) => {
	res.status(404).send("Page not found!");
});

app.listen("3000", () => {
	console.log("listening on port 3000");
});
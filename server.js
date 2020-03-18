const express = require("express");
const app = express();
const wgData = require("./wg-data.json")
app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));

const server = app.listen(3000, () => {
    console.log("Express Running -> PORT ${server.address().port}");
});

app.get(["/", "/index"], (req, res) => {

    res.render("index", {
    	title: "The Sprawl Trilogy: Homepage",
    	books: wgData.books
    });
});

app.get("/view-book", (req, res) => {


	const book = wgData.books.find(b => b.id === req.query.id);
	res.render("book", {
		title: ("The Sprawl Trilogy: " + book.title),
		book: book

	});
});

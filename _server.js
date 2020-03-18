const express = require("express");
const app = express();
app.set("view engine", "pug");

const server = app.listen(3000, () => {
    console.log("Express Running -> PORT ${server.address().port}");
});

app.get(["/", "/index"], (req, res) => {
    res.render("index", {name: "Jim", colour: "Red"});
});

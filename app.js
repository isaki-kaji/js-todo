const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {

    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);
    res.render("list", { day: day, todo: items });
});

app.post("/", function (req, res) {
    var item = req.body.todo;
    items.push(item);

    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Serveer is running!");
});
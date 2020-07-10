var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//var pug = require("pug");

var port = 3000;

var app = express();


app.use(function(_req, _res, next) {
    console.log("Time: ", Date.now());
    next();
});

//app.set("view engine", "pug");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public page")));

app.get('/', function(_req, res){
    res.render("index", {
        title: "Hello Wold",
        showTitle: true,
        people: ['John', 'Raquan', 'Jesus']
    });
});

app.get('/about', function (_req, res) {
    res.render('about');
});

app.get('/contact', function (_req, res) {
    res.render('contact');
});

app.listen(port);
console.log("Server started on port " + port);

module.exports = app;
'use strict'

var express = require("express");
var bodyparser = require("body-parser");
var Adjectives = require("./lib/adjectives.js");
var Nouns = require("./lib/nouns.js");
var Verbs = require("./lib/verbs.js");
var getRandomWord = require("./lib/getRandomWord.js");
var postAddWord = require("./lib/postAddWord.js");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/app/"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

var adjectives = new Adjectives();
var nouns = new Nouns();
var verbs = new Verbs();

/***************** GET requests *******************/
app.get("/", function(req, res) {
	res.sendFile("index.html");
});

app.get("/adjective", function(req, res) {
	res.json(getRandomWord(adjectives));
});

app.get("/noun", function(req, res) {
	res.json(getRandomWord(nouns));
});

app.get("/verb", function(req, res) {
	res.json(getRandomWord(verbs));
});

/**************** POST requests ******************/
app.post("/adjective", function(req, res) {
	console.log(req.body);
	res.json(postAddWord(req.body.word, adjectives));
});

app.post("/noun", function(req, res) {
	console.log(req.body);
	res.json(postAddWord(req.body.word, nouns));
});

app.post("/verb", function(req, res) {
	console.log(req.body);
	res.json(postAddWord(req.body.word, verbs));
});

/********** other ***********/
app.listen(port, function() {
	console.log('server started on port ' + port);
});

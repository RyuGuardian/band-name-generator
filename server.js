'use strict'

var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/app/"));

function Adj() {
	this.tired = true;
	this.unimpressed = true;
	this.soulCrushing = true;
	this.lame = true;
	this.eerie = true;
};

var adj = new Adj();

function getRandomWord(obj) {
	var propArr = Object.keys(obj);

	var randomProp = propArr[Math.floor(Math.random() * propArr.length)];

	return {word: randomProp};
}

app.get("/", function(req, res) {
	res.sendFile("index.html");
});

app.get("/adjective", function(req, res) {
	res.json(getRandomWord(adj));
});

app.listen(port, function() {
	console.log('server started on port ' + port);
});

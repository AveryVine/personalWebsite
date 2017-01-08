var express = require('express');
var app = express();
var bodyParser = require('body-parser')

const ROOT = "./public";

app.set('views','./views');
app.set('view engine','pug');

app.use(function(req, res, next) {
	console.log(req.method + " request for " + req.url);
	next();
});

app.get("/assets/:assetName", function(req, res) {
	res.sendFile(req.params.assetName, {root:'./assets'});
});

app.get(['/', '/index.html', '/index'], function(req, res) {
	res.render('index');
});

app.use(express.static(ROOT));

app.all("*", function(req, res) {
  res.status(404);
	res.render('404');
})

app.listen(2406, function() {
	console.log("Server listening on port 2406");
});

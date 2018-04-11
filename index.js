const express = require('express');
const app = express();
const fs = require("fs");
const bodyParser = require('body-parser')

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/', function (req, res) {
  res.end(`AvariaVS API

By: T.Boccinfuso 
www.twitter.com/boccinfusoT`);
});

app.get('/classes', function (req, res) {
  fs.readFile( __dirname + "/" + "apis/classes.json", 'utf8', function (err, data) {
    res.end( data );
  });
});

app.get('/classes/:class', function (req, res) {
  fs.readFile( __dirname + "/" + "apis/classes.json", 'utf8', function (err, data) {
     var className = JSON.parse( data );
     console.log(req.params);
     var selectedClass = className[req.params.class]
     console.log( selectedClass );
     res.end( JSON.stringify(selectedClass));
  });
});

app.get('/classes/:class/:hero', function (req, res) {
  fs.readFile( __dirname + "/" + "apis/classes.json", 'utf8', function (err, data) {
     var heroName = JSON.parse( data );
     var selectedClass = heroName[req.params.class];
     var selectedHero = selectedClass[req.params.hero];
     res.end( JSON.stringify(selectedHero));
  });
});

app.get('/classes/:class/:hero/:stat', function (req, res) {
  fs.readFile( __dirname + "/" + "apis/classes.json", 'utf8', function (err, data) {
     var heroName = JSON.parse( data );
     var selectedClass = heroName[req.params.class];
     var selectedHero = selectedClass[req.params.hero];
     var selectedStat = selectedHero[req.params.stat];
     res.end( JSON.stringify(selectedStat));
  });
});


app.listen(3000, function () {
  console.log('listening on port 3000!')
});
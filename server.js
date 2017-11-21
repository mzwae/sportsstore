var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyparser = require('body-parser');
var app = express();
app.use(logger('dev'));


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'angularjs')));
app.set('views', path.join(__dirname, 'angularjs'));


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'angularjs', 'app.html'));
  
});


app.listen(3000, function () {
  console.log("Server listening on port 3000...");
});
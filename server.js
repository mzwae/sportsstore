var express = require('express');
var path = require('path');
var logger = require('morgan');
var app = express();
app.use(logger('short'));

app.use(express.static(path.join(__dirname, 'angularjs')));
//app.set('views', path.join(__dirname, 'angularjs', 'app.html'));
//console.log("__dirname:", path.join(__dirname, 'app.html'));
app.get('/', function(req, res){
  res.redirect('/app.html');
});


app.listen(3000, function(){
  console.log("Server listening on port 3000...");
});



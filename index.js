var express = require('express');
var app = express();

app.get('/', function(req, res){
  console.log('Hey Fuck you');
  res.send('hello world');
});

app.listen(8080, function(){
  console.log('listening on port 8080');
});
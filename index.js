var pm = require('./utils/port-manager');
var gpio = require('pi-gpio');
var express = require('express');



var app = express();

pm.clean();
pm.open();

app.get('/:port/on', function(req, res){
  gpio.write(req.params.port,1);
  res.sendStatus(200);
});

app.get('/:port/off', function(req, res){
  gpio.write(req.params.port,0);
  res.sendStatus(200);
});

var server = app.listen(3000, function(){
  console.log('running');
});
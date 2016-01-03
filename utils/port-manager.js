var gpio = require('pi-gpio');

/**
* Manages and Organizes the ports of the application being run.
*
* @class portManager
* @constructor
*/
var portManager = function(){
  this.allPorts = [
    1,2,3,4,5,6,7,8,9,10,
    11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,
    31,32,33,34,35,36,37,38,39,40
  ];
};

portManager.prototype.clean = function(ports){
  ports = ports || this.allPorts;
  for(var i = 0; i < ports.length; i++){
    try{
      gpio.close(ports[i]);
      console.log('i opened port[i]');
    }catch(err){
      console.log('port not valid for closing');
    }
  }
};

portManager.prototype.open = function(ports){
  ports = ports || this.allPorts;
  for(var i = 0; i < ports.length; i++){
    try{
      gpio.open(ports[i], 'output', function(){
	console.log('i opened port[i]');
      });
    }catch(err){
      console.log('port not valid for opening');
    }
  }
};


module.exports = new portManager();
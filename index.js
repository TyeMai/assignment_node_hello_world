
var myLogger = require('./lib/logger');
var data = require('./data/logs.json');
var _ = require('lodash');



_.each(data, function(obj) {
  myLogger.log(obj.message, obj.level)
})
//change to log.

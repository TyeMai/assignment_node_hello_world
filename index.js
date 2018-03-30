
var myLogger = require('./lib/logger');

//console.log('hello world')
//console.log(myLogger.name)

var data = require('./data/logs.json');

var _ = require('lodash');



//myLogger.logger("info test","info")



//myLogger.logger(_.each(data))

//console.log(_.each(data.message)) undefined

//console.log(data.message) undefined

//console.log(_.each(data)) outputs logs.json file

_.each(data, function(obj, index) {

  //console.log(msg)
  //console.log(lvl.level)

  myLogger.logger(obj.message, obj.level)
  //console.log(data)
})

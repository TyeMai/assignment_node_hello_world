var chalk = require('chalk');
var array = [1,2,3,4,5]

module.exports = {
  name: 'tye log',
  log: function (message, level){
    if (level === "info") {
      module.exports.info(message)
    } else if (level === "warning") {
      module.exports.warning(message)
    } else {
      module.exports.error(message)
    }
  },
   info: function(message){
        console.log(chalk.blue(message))
      },
   warning: function(message){
        console.log(chalk.yellow(message))
      },
   error: function(message){
        console.log(chalk.red(message))
      }

}





//var array2 = require('lodash/array');

//console.log(chalk.magenta('hello beautiful'))

//console.log(lodash.each(array))  !!!






//module.exports.logger("info test","info")
//module.exports.logger("warning test", "warning")
//module.exports.logger("error test", "error")

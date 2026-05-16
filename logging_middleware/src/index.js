const Logger = require('./logger');

let instance = null;

function getLogger() {
  if (!instance) {
    instance = new Logger();
  }
  return instance;
}

module.exports = { Logger, getLogger };

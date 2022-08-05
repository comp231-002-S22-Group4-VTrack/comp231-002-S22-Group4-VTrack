// Load the correct configuration file according to the 'NODE_ENV' variable
module.exports = require("./env/" + 'development' + ".js");

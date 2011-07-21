//load db
var cradle = require('cradle');
var dbConnection = new(cradle.Connection)().database('blog');

module.exports = dbConnection;

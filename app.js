NODE_ROOT = process.env.NODE_ROOT = __dirname;

require.paths.unshift(NODE_ROOT + "/config");
require.paths.unshift(NODE_ROOT + "/config/initializers");
require.paths.unshift(NODE_ROOT + "/app/models");
require.paths.unshift(NODE_ROOT + "/app/controllers");

var express = require('express');
//globals
_ = require('underscore/underscore')._;


//express resource
Resource    = require('express-resource');

//load models
Post = require('post');
User = require('user');
Comment = require('comment');

//app
var app     = module.exports = express.createServer();

require("environment.js")(express, app);
require("routes.js")(app);


app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

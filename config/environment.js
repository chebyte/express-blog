
module.exports = function(express, app){
	app.configure(function(){
    app.set('views', NODE_ROOT + '/app/views');
	  app.set('view engine', 'ejs');
	  app.use(express.bodyParser());
	  app.use(express.methodOverride());
	  app.use(app.router);
	  app.use(express.static(NODE_ROOT + '/public'));
		dbConnection = require('database');
		//load initializers
		_.each(['testData','viewsDB'], function(lib){ require(lib); });
	});	
	
	app.configure('development', function(){
	  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
	});

}
var couch_environment = {
  development: 'http://127.0.0.1:5984',
  production: process.env.CLOUDANT_URL
};

function setupDB(store, url) {
  url = parse(url);
  if (url.auth) {
    User.prototype.DatabaseAdaptor =  new(Cradle.Connection)(url.hostname, url.auth ? 443 : 5984, { 
      secure: true, 
      auth: { username: url.auth.split(":")[0], password: url.auth.split(":")[1] }
    }).database(store);
  } else {
    User.prototype.DatabaseAdaptor =  new(Cradle.Connection)(url.hostname).database(store);
  }
}



module.exports = function(express, app){
	app.configure(function(){
    app.set('views', NODE_ROOT + '/views');
	  app.set('view engine', 'ejs');
	  app.use(express.bodyParser());
	  app.use(express.methodOverride());
	  app.use(app.router);
	  app.use(express.static(__dirname + '/public'));
	});	
	
	app.configure('development', function(){
	  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
	});

	app.configure('production', function(){
	  app.use(express.errorHandler()); 
	});
		
}
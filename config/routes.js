module.exports = function(app){
	
	var PostController = require("postsController");
	
	//posts
	app.resource('/', PostController);
	
}
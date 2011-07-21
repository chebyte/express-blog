module.exports = function(app){
	
	var PostController      = require("postsController");
	var AdminPostController = require("admin/postsController");
	//posts
	app.resource(PostController);
	//admin posts
	app.resource("admin", AdminPostController);
}
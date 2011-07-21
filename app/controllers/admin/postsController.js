(function($) {
	
 	var postObject = new Post();
  
	$.index = function(req, res){
		postObject.findAll(function(err, posts){
				res.local("posts", posts);
				res.render('posts/index');
		    //res.send(require('sys').inspect(docs));
		  });
	};
	
	$.show = function(req, res){
		postObject.findById(req.params.id, function(err, post){
				res.local("post", post);
				res.render('posts/show');
		    //res.send(require('sys').inspect(docs));
		  });		
	}
  		
}(exports));

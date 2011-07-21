(function($) {
  
	$.index = function(req, res){
		res.render('posts/index');
	};
  		
}(typeof exports === 'undefined' ? this['postsController']={} : exports));

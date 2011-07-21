var ActiveObject = typeof ActiveObject == "undefined" ? require("activeobject") : ActiveObject;

// var Post = ActiveObject({
// 
//   attributeAccessible: {
// 		_id: "string",
// 		desc: "string"
//   }
// });


var Post = function(){};

Post.prototype.__defineGetter__("title", function(){
	return this['_id'];
});

Post.prototype.save = function(posts, callback){
	if (typeof(posts.length) === "undefined"){
		posts = [posts]
	}
	
	for(i=0;i<posts.length;i++){
		post = posts[i];
		post.created_at = new Date();
	}
	
  dbConnection.save(posts, function(err, res) {
    if(err) callback(err)
    else callback(null, res);
  });
};

Post.prototype.findAll = function(callback){
	dbConnection.view('posts/all', function(err, res){
		if(err) callback(err)
		else callback(null, res)
	});
};


Post.prototype.findById = function(id, callback){
	dbConnection.get(id, function(err, res){
		if( err ) callback(err)
		else callback(null, res)
	});
};


module.exports = Post;

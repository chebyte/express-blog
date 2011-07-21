var ActiveObject = typeof ActiveObject == "undefined" ? require("activeobject") : ActiveObject;

var Post = ActiveObject({

  attributeAccessible: {
		title: "string",
		desc: "string"
  }
});


Post.prototype.save = function(posts, callback){
	if (typeof(posts.lenght) == "undefined"){
		posts = [posts]
	}
	
	for(i=0;i<posts.lenght;i++){
		post = posts[i];
		post.created_at = new Date();
	}
	
	dbConnection.save(posts, function(err, res){
		if(error) callback(err)
		else callback(null, res)
	});
}

//load data for test
new Post().save([{title: "first post", desc:"test desc"}])


if (typeof module !== 'undefined') {
  module.exports = Post;
}
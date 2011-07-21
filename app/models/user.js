var ActiveObject = typeof ActiveObject == "undefined" ? require("activeobject") : ActiveObject;

var User = ActiveObject({
  
  attributeAccessible: {
    _id: "string",
    login: "string",
    firstName: "string",
    lastName: "string",
    password: "string", 
    salt: "string"
  }
});


if (typeof module !== 'undefined') {
  module.exports = User;
}
var validator  = require('validator')

var UserModel = {};

var users = {};

// Adds a user with email and password, and calls the callback with False
// if user is 
UserModel.addUser = function(email, password, callback){
    if(!email || !validator.isEmail(email)){
        callback(false, "Email is ill-formed");
    }
    else if(email in users){
        callback(false, "Email already exists");
    }
    else if(!password){
        callback(false, "Password is ill-formed");
    }
    else{
        users[email] = { password };
        callback(true);
    }
};

module.exports = UserModel;


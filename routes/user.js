
/*
 * GET users listing.
 */
var data = require("./../models/user.js")

exports.list = function(req, res){
  res.send("respond with a resource");
};

//注册页面
exports.register = function(req,res){
	res.render('register/register.ejs',{
		title:"用户注册"
	});
}
//注册用户
exports.reg = function(req,res){
	var result = data.addRegister(req.body,function(err,rows){
		res.render('./',{
			title:"注册"
		});
	});
	
	
}
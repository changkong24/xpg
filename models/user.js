var sqlHelp = require("./sqlHelp");
var crypto = require('crypto');
var key = "changkong24lifan";//加密key

var user = function(){};
//用户注册
user.prototype.addRegister = function(reqParams,callback){
	// var cardID = getNewID();
	var userName = reqParams.userName;
	var password = getHashData(reqParams.psw);
	var email = reqParams.email;
	var sql = 'insert into vip(cardID,regTime,userName,password,email) values("0002",now(),0,"'+userName+'","'+password+'","'+email+'")';
	return sqlHelp.exexSql(sql,callback);
}	

//获取加密数据
function getHashData(str){
	var cipher = crypto.createCipher('aes-256-cbc',key.toString("ascii"))
	var crypted = cipher.update(str,'utf8','hex');
	crypted += cipher.final('hex')
	return crypted;
}
//解密
function getOldData(str){
	var decipher = crypto.createDecipher('aes-256-cbc','InmbuvP6Z8')
	var dec = decipher.update(str,'hex','utf8');
	dec += decipher.final('utf8');
	return dec;
}
module.exports = new user();

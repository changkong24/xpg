
/*
 * GET home page.
 */
var data = require("./../models/index.js")
exports.index = function(req, res){
	//商城公告
	var noticeData = {
		hasGet:false,
		data:[]
	};
	var bztj = {
		hasGet:false,
		data:[]
	};
	var getNotice = function(){
		//获取前五条
		data.getTop5Activy(dataBack);
	}();
	var getBztjData = function(){
		data.getBztjData(bztjDataBack)
	}();
	//获取信息通知数据返回
	function dataBack(err,rows){
		if(err){
			noticeData.hasGet=true;
			noticeData.data = [];
			console.log("get data error ;info:"+err);
		}
		else{		
			noticeData.hasGet = true;
			noticeData.data = rows;
		}
		if(bztj.hasGet){
			render();
		}
	}
	//获取本周特价数据返回
	function bztjDataBack(err,rows){
		if(err){
			bztj.hasGet = true;
			bztj.data = [];
			console.log("get data error;info:"+err);
		}
		else {
			bztj.hasGet = true;
			bztj.data = rows;
		}
		if(noticeData.hasGet){
			render();
		}
	}

  	function render(){
  		res.render('index.ejs', { 
	  		title: '小苹果零食坊-小苹果零食' ,
	  		noticeData:noticeData.data,
	  		bztj : bztj.data,
	  		all_goods:"on"
		});
  	}
};


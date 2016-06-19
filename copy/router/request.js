var http = require('http');
var url = require('url');
function start(){
	function onRequest(req,res){
		console.log(req.url+".....")
		var pathName = url.parse(req.url).pathname;
		var parameter = req.query;
		console.log('参数：'+parameter);
		console.log('Request for '+pathName+' received');
		res.write('hello '+pathName);
		res.end();
	}
	http.createServer(onRequest).listen(10086);
}

exports.start = start;
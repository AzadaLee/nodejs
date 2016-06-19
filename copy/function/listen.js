var http = require('http');

http.createServer(function(req,res){
	console.log('请求成功！');
	var data = req.read();
	console.log(data);
	res.write('hello world');
	res.end();
}).listen('10086');
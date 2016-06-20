var net = require('net');

var server = net.createServer(function(connection){
	console.log('连接server2成功！！');
	connection.on('data',function(data){
		console.log('得到信息：'+data);
	});
	connection.write('你好！！');
	connection.end();
});

server.close(function(){
	console.log('关闭成功！');
});

server.listen(8080);
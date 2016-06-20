var net = require('net');
/**
net.createServer([options], [connectionListener])
创建一个新的 TCP 服务器。参数 connectionListener 会被自动作为 'connection' 事件的监听器。
*/
var server = net.createServer(function(connection) { 
	console.log('连接成功！');
	connection.write('Hello World!\r\n');
	// connection.pipe(connection);
	connection.end();
	connection.on('end', function() {
		console.log('客户端关闭连接');
	});
	// connection.clo
	connection.on('data',function(data){
	console.log(data+'！！！');
})
});
server.listen(8080, function() { 
	console.log('server is listening');
});

server.on('data',function(data){
	console.log(data+'！！！');
})
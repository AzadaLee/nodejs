var net = require('net');

/**
net.createServer([options], [connectionListener])
创建一个新的TCP服务，
参数connectionListener会被自动作为connection事件的监听器;或者写成。。.on('connection',function(){。。。。})

TCP服务含有事件：	事件: 'listening'：在服务器调用 server.listen绑定后触发。
			事件: 'connection'
			事件: 'close'
			事件: 'error'

*/
var server = net.createServer(function(){
	console.log('创建服务成功！');
});

/*
	监听connection事件，获得一个connection参数
*/
server.on('connection',function(c){//得到一个connection形参
	console.log('连接成功！！！！');
	//往客户端输出信息
	c.write('hello world ！！！');
	c.end();
	//end事件不是server所有，为获取到的connection对象的事件
	c.on('end',function(){
		console.log('连接关闭');
	})
});

/*
服务器停止接收新的连接，保持现有连接。这是异步函数，当所有连接结束的时候服务器会关闭，并会触发 'close' 事件。
*/
server.close(function(){
	console.log('关闭服务！');
});

var address = server.address();
console.log(address);

server.listen(10010);
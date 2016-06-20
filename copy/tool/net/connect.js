var net  = require('net');
/**
构建一个新的套接字对象并打开所给位置的套接字。当套接字就绪时会触发 'connect' 事件。
*/
var client = net.connect({port:8080},function(data){
	console.log('连接成功！');
	console.log(data);
	// client.write('helll world !');
	client.write('world!\r\n');
});

client.on('data',function(data){
	console.log(data.toString());
	client.end();
});


client.on('end',function(){
	console.log('连接关闭！');
});
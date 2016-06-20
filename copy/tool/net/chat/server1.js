var net = require('net');

var client = net.connect({port:8080},function(data){
	client.write('world!');
});

client.listen(8081,function(){
	
});
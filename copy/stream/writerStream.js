var fs = require('fs');
var writerStream = fs.createWriteStream('writerStream.txt');
var content = '用作测试writerStream，输出到文件中的内容！';
writerStream.write(content,'utf-8',function(arg){
	console.log('write方法执行完成，进行回调，传入参数：'+arg);
});

writerStream.end(function(arg){
	console.log('执行end方法，传入参数：'+arg);
});

writerStream.on('finish',function(){//该事件由上文end方法触发
	console.log('触发finish事件。。');
});

console.log('end。。。。');
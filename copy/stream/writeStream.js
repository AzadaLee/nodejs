var fs = require('fs');
var out = '输出到文件中的内容！';
var writerStream = fs.createWriteStream('out.txt');
writerStream.write(out,'utf-8');
writerStream.end();
writerStream.on('finish',function (argument) {//finish为writeStream内部触发的事件
	console.log('写入文件完成！');
});
writerStream.on('error',function(error){
	console.error('写入文件异常！:'+error.toString());
});

console.log('end。。。。。');
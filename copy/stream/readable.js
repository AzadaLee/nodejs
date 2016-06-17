/*
Readable（可读）流接口是对正在读取的数据的来源的抽象；
含有四个事件：readable、data、end、close、error
可读流是从文件系统对象获取到的，获取方式：var readerStream = require('fs').createReadStream();
*/
var fs = require('fs');
var readerStream = fs.createReadStream('readerStream.txt','utf-8');

var readData = readerStream.read(10);//该方法仅应在暂停模式时被调用。在流动模式中，该方法会被自动调用直到内部缓冲区排空
console.log(readData+"@@@@@");

readerStream.on('data',function(data){
	console.log('读取到的流的内容为：'+data);
}); 

readerStream.on('error',function(error){
	console.error('读取文件发生异常，'+error);
});

readerStream.on('readable',function(msg){//无形参，msg为undifined
	console.log('触发readable事件，信息：'+msg);
});

readerStream.on('end',function(msg){//无形参，msg为undifined
	console.log('触发end事件成功，信息：'+msg);
});

readerStream.on('close',function(msg){//无形参，msg为undifined
	console.log('触发close事件成功，信息：'+msg);
});

console.log('end。。。。。。');
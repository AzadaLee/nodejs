//引入事件模块
var events = require('events');
var emitter = new events.EventEmitter();
emitter.once('onceListener',function(err,data){
	if(err){
		return console.error(err.toString());
	}
	console.log(data.toString());
});

var fs = require('fs');
var content = '我要开始学习nodejs监听模块了。。。。';
fs.writeFile('writeFileTest.txt',content,function(err){
	if(err){
		return console.log('写入文件发生异常：'+err.toString());
	}
	emitter.emit('onceListener',err,'写入文件触发的事件！！！');
});


emitter.emit('onceListener','','测试onceListener！！！');

console.log('end。。。。。。。');

/*
上文两个emitter.emit(...)只会触发一次
*/
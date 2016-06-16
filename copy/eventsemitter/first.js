/*
一、事件循环
	1、node.js是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能很高；	
	2、node.js的每个api都是异步的，并作为一个独立的线程运行，使用异步函数调用并处理并发；
	3、node.js基本上所有的事件机制都是使用的观察者模式；
	4、node.js单线程类似于进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个观察者，
	如果有事件发生就调用该回调函数。
二、事件驱动程序
	1、node.js使用事件驱动模型，当web server接收到请求，就把他关闭然后进行处理，然后去服务下一个请求；
	2、当这个请求完成，他被放回处理队列，当到达队列开头，这个结果返回给用户；
	3、这个模型非常高效，因为webserver一直接受请求而不等待任何IO操纵；
*/
/*
	使用步骤
*/
//1、引入事件模块
var events = require('events');
//2、使用事件创建事件发生器对象
var emitter = new events.EventEmitter();
//3、使用事件发生器监听一个事件。emitter.on('enentName',callback)，第一个参数为监听的事件名，第二个为触发的事件
//监听一个自定的readFileEvent事件，回调中接收两个参数，第一个为异常信息，第二个为文件内容
emitter.on('readFileEvent',function(err,data){
	if(err){
		throw err;
	}
	console.log('事件驱动成功！！！');
	console.log(data.toString());
});

var fs = require('fs');

var handler = function(err,data){
	if(err){
		return console.error('读取文件发生异常：'+err.toString());
	}
	console.log('读取文件并回调成功！！');
	console.log(data.toString());
	/*
		emit('eventName',[arg1],[arg2],[...])，第一个参数为触发的事件名，其余的为传入监听事件回调函数的参数；
		注意：需要将序号排列正确
	*/
	emitter.emit('readFileEvent',err,data);
}
fs.readFile('readedFile.txt',handler);

emitter.emit('readFileEvent','','测试');
console.log('end。。。。。。。。。。')
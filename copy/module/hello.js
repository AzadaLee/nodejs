module.exports = Hello;
function Hello(){
	console.log('初始化sayHello！');
	this.sayHello = function(name){//必须使用this.进行修饰，否则调用的时候会报sayHello不是一个方法的异常
		console.log('say hello to '+name+'！');
	}
}
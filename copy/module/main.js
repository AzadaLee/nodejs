
//只要引用了该main.js文件，就会输出下文
console.log('引用main.js成功！');

/**
	定义一个hello方法
	必须使用exports.进行修饰，否则在引用该js文件之后仍然调用不到该方法
	引用方式：var main = require('./main.js'); main.hello('Lee');
*/
exports.hello = function(name){
	console.log('正在调用hello方法：hello '+name);
}

exports.printSomething = function(content){
	console.log('打印出：'+content);
}
/**
	定义一个property属性
	如果不使用exports.进行修饰，在引用该js文件之后调用该属性会是undifined;
	引用方式：var main = require('./main.js'); main.property;
*/
exports.property = '这是一个属性！';

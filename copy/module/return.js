module.exports = returnDemo;
console.log('加载到return.js');
function returnDemo(){
	console.log('初始化成功！');
	this.test = function(name){
		return 'hello '+ name;
	}
}

//会将上面的returnDemo覆盖，即：一个模块只能对外输出一个对象
module.exports = demo;
function demo(){
	console.log('初始化demo成功！！！！！');
	this.test = function(name){
		return '你好 '+ name;
	}
}
console.log('引入模块成功！');
/**
	module.exports = Module的作用为了别的js文件（模块）在引入该js之后，可以使用new Module()创建一个该类的实例
	注意：module.exports 的值必须和文件中的方法一致，否则在创建对象的时候会报错
*/
module.exports = Module;
function Module(arg){
	console.log('初始化exportsModule模块成功！');
	console.log('打印形参：'+arg);

	//声明一个方法时候必须用this修饰，代表是这个对象的方法
	this.method1 = function(arg){
		console.log('调用方法method1！！'+arg);
	}

	this.method2 = function (arg){
		console.log('调用方法method2。。。。');
	}

	this.prop = arg;
}

/**
	注意：若一个js文件中含有两个对象，即：像下文一样多一个module.exports = .....
	此时，下面的会将上面的覆盖
*/
// module.exports = Module2;
// function Module2(arg){
// 	console.log('.。。。。。。。。。');

// }

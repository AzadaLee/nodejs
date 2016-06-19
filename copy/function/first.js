function say(arg){
	console.log('打印'+arg);
	return arg;
}

function exe(someMethod,arg){
	console.log(arg);
	console.log(someMethod('测试！'));
}

//这里say作为一个方法传递到exe方法里
exe(say,'调用exe方法');

/**
以上代码中，我们把 say 函数作为execute函数的第一个变量进行了传递。这里返回的不是 say 的返回值，而是 say 本身！
这样一来， say 就变成了execute 中的本地变量 someFunction ，execute可以通过调用 someFunction() （带括号的形式）来使用 say 函数。
当然，因为 say 有一个变量， execute 在调用 someFunction 时可以传递这样一个变量。
*/
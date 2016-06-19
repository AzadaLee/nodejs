

process.on('exit',function(code){
	console.log('退出代码：'+code);
});

process.on('beforeExit',function(code){
	console.log('退出之前代码：'+code);
});

process.on('uncaughtException',function(code){
	console.log('uncaughtException 代码：'+code);
});

// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// 获取执行路局
console.log(process.execPath);


// 平台信息
console.log(process.platform);

console.log('退出程序成功');
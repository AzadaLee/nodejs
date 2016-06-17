
var content = '陶';
//var content = '1';
//var content = 't';
console.log('类方法byteLength测试：'+Buffer.byteLength(content));//结果：中文为三个字节，数字和字母一个字节


//创建一个长度为10字节的buffer实例
var buf1 = new Buffer(256);
console.log('测试buf1的长度：'+buf1.length);
var fs = require('fs');
console.log('测试fs是否为buffer实例：'+Buffer.isBuffer(fs));
console.log('测试buf是否为buffer实例：'+Buffer.isBuffer(buf1));

var buf2 = new Buffer('node.js Buffer 实例测试','utf-8');
var buf3 = new Buffer([1,2,3,'4','5']);
// for( i = 0;i<buf3.length,i++){
// 	console.log('buf3:'+buf3[4]);
// }



//console.log(Buffer.isEncoding('utf-8'));
console.log('测试输出buf2的内容：'+buf2);
//concat(list,[totalLength])为Buffer的类方法，作用是将形参一数组list中包含的buffer实例拼接
console.log('concat:'+Buffer.concat([buf2,buf3]));

//write(str,[],[],[])将字符串str写入buf，返回buf的长度
console.log(buf1.write('测试write方法')+'。。。');

//测试toString()方法
console.log('buf1:'+buf1.toString());

//测试toJSON
var json = buf1.toJSON();
console.log('JSON:'+JSON.stringify(json));
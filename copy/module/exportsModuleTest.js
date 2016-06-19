/**
require的是一个js文件名，并不是module.exports = ...省略的值；
结果类似于得到一个类，并不是得到实例。

*/
var ExportsModule = require('./ExportsModule');

var module = new ExportsModule('test');
module.method1('m1');

module.method2();
console.log('打印参数：'+module.prop+"!!!!!!!!!!!");

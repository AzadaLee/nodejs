/*
相对路径之当前目录：./xxx/xxx.js 或 ./xxx/xxx。
相对路径之上级目录：../xxx/xxx.js 或 ../xxx/xxx。
绝对路径：F:/xxx/xxx.js 或 /xxx/xxx.js 或 /xxx/xxx。
*/

var Hello = require('./Hello'); //    "./" 表示当前目录下
hello = new Hello();
hello.sayHello('world');
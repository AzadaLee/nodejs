var os = require('os');

//返回操作系统的默认临时文件夹。
var tmpdir = os.tmpDir();
console.log(tmpdir);

//返回主机名
var hostname = os.hostname();
console.log(hostname);

//返回操作系统名称
var type = os.type();
console.log(type);

//返回操作系统名
var platform = os.platform();
console.log(platform);

//返回操作系统 CPU 架构，可能的值有 "x64"、"arm" 和 "ia32"。
var arch = os.arch();
console.log(arch);

//返回操作系统的发行版本。
var release = os.release();
console.log(release);

//返回操作系统运行的时间，以秒为单位。
var uptime = os.uptime();
console.log(uptime);

//返回系统内存总量，单位为字节。
var totalmem = os.totalmem();
console.log(totalmem);

//返回操作系统空闲内存量，单位是字节。
var freemem =	os.freemem();
console.log(freemem);

//获得网络接口列表。
var  networkInterfaces = os.networkInterfaces();
console.log(networkInterfaces);
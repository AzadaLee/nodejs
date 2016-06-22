var fs = require('fs');
// var data = '';
 var readerStream = fs.createReadStream('input.txt',{bufferSize: 5});
// readerStream.setEncoding('UTF8');
// readerStream.on('data',function(chunk){
// 	data += chunk;
// });
// readerStream.on('end',function(){
//    console.log(data);
// });

// readerStream.on('error', function(err){
//    console.log(err.stack);
// });

// console.log("程序执行完毕");


var buffers = [];
var nread = 0;
readerStream.on('data', function (chunk) {
    buffers.push(chunk);
    nread += chunk.length;
});
readerStream.on('end', function () {
    var buffer = null;
    switch(buffers.length) {
        case 0: buffer = new Buffer(0);
            break;
        case 1: buffer = buffers[0];
            break;
        default:
            buffer = new Buffer(nread);
            for (var i = 0, pos = 0, l = buffers.length; i < l; i++) {
                var chunk = buffers[i];
                chunk.copy(buffer, pos);
                pos += chunk.length;
            }
        break;
    }
});
console.log(buffers);
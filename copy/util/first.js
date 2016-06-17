var util = require('util');
var events = require('events');
var emitter = events.EventEmitter;//拿到对象
var Person = function(name){
	this.name = name;
}

util.inherits(Person,emitter);

var p = new Person('taoxiuma');
p.on('hello',function(args){
	console.log('hello:'+this.name+'。。'+args);
});
p.emit('hello','这是形参');
console.log('end。。。。。。。。。。。');

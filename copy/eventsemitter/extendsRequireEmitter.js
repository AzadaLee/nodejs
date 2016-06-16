var util = require('util');
var events = require('events');

var Cat = function(name){
	this.name = name;
}

/*
	util的方法inherits(obj,obj2)，作用是让obj继承obj2
*/
util.inherits(Cat, events.EventEmitter);
var tom  = new Cat('Tom');
tom.on('sayHi',function(){
	console.log('hello '+this.name);//若不用this调用name，将会是undefined
});

tom.emit('sayHi');
console.log('end。。。。');


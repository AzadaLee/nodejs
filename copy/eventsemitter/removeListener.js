
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
emitter.on('removeLis',function(name){
	console.log('执行removeLis。。。。。'+name);
});
emitter.removeListener('removeLis',function(){
	console.log('执行。。。。。');
});
	 
emitter.emit('removeLis');


/*
var EventEmitter = require ( 'events' ) . EventEmitter ;   

var emitter = new EventEmitter ( ) ;

emitter . on ( 'sayHi' , function ( someone ) {

console . log ( someone +"。。。。。。。") ;

} ) ;

emitter . removeListener ( 'sayHi' , function ( ) {

console . log ( 'sayHi event' ) ;         

} ) ;

emitter . emit ( 'jerry' ) ;
*/
var http = require('http') ;
var fs = require('fs') ;
var server = http.createServer(function (req, res) {
    fs.readFile( 'data.txt', 'UTF8',function (err, data) {
    	console.log(data);
        res.end(data);
    }) ;
}) ;
server.listen(8888) ;
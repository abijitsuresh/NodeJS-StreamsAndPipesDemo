var http = require('http');
var fs = require('fs');

// var readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
// var writeStream = fs.createWriteStream(__dirname + '/writeme.txt');

// readStream.on('data', function(chunk){
//     console.log('New chunk received: ');
//     writeStream.write(chunk);
// });

// Pipe
// readStream.pipe(writeStream);

var server = http.createServer(function(req, res){
    console.log('Request was made from: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
    readStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log("Listening to port 3000!");
var http = require('http');
var account = require('./account');

http.createServer(function(request, response){
    response.writeHead(200);
    //response.write('Hello World!');
    response.write(account());
    response.end();
}).listen(4000);


console.log('We are Running on port 4000!');
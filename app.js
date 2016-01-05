/**
 * Created by acoelho on 1/5/16.
 */
/**
 * Created by acoelho on 1/4/16.
 */

//console.log("Hello Theta!");
//Welcome to your Node Module Peer challenge!
//
//    In this challenge, you will need to spin up a new project (much like we did in lecture). You will need to create a couple modules to complete this challenge.
//
//    The first module will export a function that returns a random number after taking in a min and max value as arguments(hint: use the function that we used in previous assignments). When you call this module, use '100' as your min, and '1000000' as your max.
//
//    The second module should accept a number and convert it to a USD value (Hint: you will want to Google examples of this. I found a couple reasonable examples of this in a simple 5 minute search).
//
//The third module should require the other two modules. It should have two function exports. The first function export should be the return of the first module being passed into the second module. The other function should be a simple text return that says “Account balance: \n”.
//
//Finally, in the app.js, do the standard stuff. Start a server, require what else is needed, set the port. When the server is curled, it should produce the result of third module.
//
//    Good luck!


var http = require('http');
var account = require('./account');

http.createServer(function(request, response){
    response.writeHead(200);
    //response.write('Hello World!');
    response.write(account());
    response.end();
}).listen(4000);


console.log('We are Running on port 4000!');
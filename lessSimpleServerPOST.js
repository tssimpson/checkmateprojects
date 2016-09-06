var http = require('http');
var request = require('request');

const PORT = 8080;

function theRequest(request, response)
{
  //  console.log(request);
    // response.end('You made a ' + request.method + ' request');
    request.method = 'POST';
    response.end('You made a ' + request.method + ' request');
}

var server = http.createServer(theRequest);

server.listen(PORT, function()
{
  console.log("Server is currently listening on port %s", PORT);
}
);

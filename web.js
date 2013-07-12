var express = require('express');

var buffer =  new Buffer(fs.readfile('index.html'));
var string = buf.toSring(buffer); 
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

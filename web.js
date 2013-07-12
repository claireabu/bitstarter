var express = require('express');

var buff =  new Buffer(fs.readFileSync('index.html', function(err,data){
    if (err) throw err;
    console.log(data);
}));

var text  = buffer.toString(buff);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

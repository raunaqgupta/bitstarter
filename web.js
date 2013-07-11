var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  file_contents = new Buffer(fs.readFileSync("index.html"), "utf-8");  
  response.send(file_contents.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

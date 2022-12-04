const http = require('http');
const messages = require('./modules/messages');
const port = process.env.port || 4000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(messages.title());
  res.write(messages.subtitle);
  res.end();
}).listen(port);

console.log("Running at port " + port);

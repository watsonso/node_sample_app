var http = require('http');
var settings = require('./settings')
var server = http.createServer();
var msg;
server.on('request', function(req, res) {
	switch (req.url) {
		case '/about':
			msg = "about this page";
			break;
		case '/profile':
			mdg = "about me";
			break;
		default:
			msg = "wrong msg";
			break;
	}
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write(msg);
	res.end();
});
server.listen(settings.port)
console.log("server listening ...");

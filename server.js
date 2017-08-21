const express = require('express');
const fs = require('fs');
const app = express();
const port = 8080;

app.get('/subApp', function(req, res) {
	res.sendFile(__dirname + '/newRoutes/index.html');
})

app.get('/subApp/:filePath(*)', function(req, res) {
	console.log('Request for /subApp/' + req.params.filePath);
	if (req.params.filePath !== '' && fs.existsSync(__dirname + '/newRoutes/' + req.params.filePath)) {
		console.log('Sending static file newRoutes/' + req.params.filePath);
		res.sendFile(__dirname + /newRoutes/ + req.params.filePath);
	} else {
		console.log('Sending index html');
		res.sendFile(__dirname + '/newRoutes/index.html');
	}
	
});

app.listen(port, function() {
	console.log('Server listening on port ' + port);
});
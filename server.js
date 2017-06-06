var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();
var documentRoot = process.env.NODE_SERVER_ROOT;
var port = process.env.NODE_SERVER_PORT;

console.info('Server:Starting...');
app.use(serveStatic(documentRoot));
console.info('Server:Document root is %s', documentRoot);

app.listen(port);
console.info('Server:Listen port is %d', port);

console.info('Server:OK!');
console.info('Hi, server is running. listening on http://localhost:%d', port);
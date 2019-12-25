"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
const port = 5000;
const app = require('../app');
const mongoose = require('mongoose');
// const server = http.createServer((req, res) =>{
// 	res.writeHead(200, {'Content-Type': 'text/html'});
// 	res.write(req.url);
//   	res.end();
// });
app.set('port', port);
const server = http.createServer(app);
const uris = "mongodb://localhost:27017/test";
// mongoose.Promise = global.Promise;
mongoose.connect(uris, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err)
        return console.log(err);
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);
});
/**
* Event listener for HTTP server "error" event.
*/
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = server.address();
    console.log('Listening on ' + addr.port);
}
//# sourceMappingURL=index.js.map
const http = require('http');
import App from "../app";

// app.set('port', port);
// const server = http.createServer(app);

try {
  new App({
    listenPort: 5000,
    applicationName: 'Blog'
  }).run();
} catch (e) {
  console.error(e.message);
}



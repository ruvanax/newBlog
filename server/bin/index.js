"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
const app_1 = require("../app");
// app.set('port', port);
// const server = http.createServer(app);
try {
    new app_1.default({
        listenPort: 5000,
        applicationName: 'Blog'
    }).run();
}
catch (e) {
    console.error(e.message);
}
//# sourceMappingURL=index.js.map
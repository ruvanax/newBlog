"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// const path = require("path");
// const createError = require('http-errors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const ApplicationRoute_1 = require("./routes/ApplicationRoute");
const ApplicationDataProvider_1 = require("./providers/ApplicationDataProvider");
class App {
    constructor(config) {
        this.config = config;
        this.config = config;
        this.expApp = express();
        App.app = this;
    }
    static getInstance() {
        return App.app;
    }
    run() {
        this.expApp.use(session({
            cookie: { maxAge: 3600000 },
            secret: 'codeworkrsecret',
            saveUninitialized: false,
            resave: false,
            store: new MongoStore({ mongooseConnection: mongoose.connection })
        }));
        this.expApp.use(express.json());
        this.expApp.use(express.urlencoded({ extended: false }));
        this.expApp.use((req, res, next) => {
            res.contentType('application/json');
            next();
        });
        let appRouter = new ApplicationRoute_1.default();
        appRouter.mount(this.expApp);
        const applicationDataProvider = new ApplicationDataProvider_1.default("test");
        applicationDataProvider.run().then(() => {
            this.expApp.listen(this.config.listenPort);
            this.expApp.on('error', this.onError);
            this.expApp.on('listening', this.onListening);
        });
    }
    onError(error) {
        if (error.syscall !== 'listen') {
            throw error;
        }
        const bind = 'Port ' + this.config.listenPort;
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
    onListening() {
        // const addr = this.expApp.address();                  //проверить, почему не находит!!!
        console.log('Listening on ' + this.config.listenPort);
    }
}
exports.default = App;
// const MongoClient = require("mongodb").MongoClient;
// import {MongoError, MongoClient as MongoClientPack} from "mongodb";
// // let db;
//
// // создаем объект MongoClient и передаем ему строку подключения
// const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true, useUnifiedTopology: true });
// mongoClient.connect(function(err:MongoError, client:MongoClientPack){
//  	const db = client.db("test");
//     const collection = db.collection("users");
// //     const user = {"username": "Ivan", "password": 123};
// //     collection.insertOne(user, function(err, result){
//
//   if(err){
//     return console.log(err);
//   }
//   collection.find().toArray(function (err:MongoError,docs:any[]) {
//     if(err){
//       console.log(err);
//     }
//     console.log("docs", docs);
//   });
//   // db = client;
// });
// const app: Application = express();
//
// app.use(express.json());
//
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(session({
//   cookie: { maxAge: 8*60*60*1000 },
//   secret: 'codeworkrsecret',
//   saveUninitialized: false,
//   resave: false,
//   store: new MongoStore({mongooseConnection: mongoose.connection})
// }));
//
// //в миддлвар нужно перенести
// app.use((req:Request, res:Response, next:NextFunction) =>{
//   if(req.session){
//     res.locals.user = req.session.user;
//     next();
//   }
// });
//
// // app.use('/', indexRouter);
// app.use('/rest/users', usersRouter);
// app.use('/rest/posts', postsRouter);
//
// // catch 404 and forward to error handler
// app.use((request, response, next) =>{
// 	next(createError(404));
// });
//
// // error handler
// app.use(function(err: any, req:Request, res:Response, next:NextFunction) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = err;
//
//   res.status(err.status || 500).send(err.message);
// });
//# sourceMappingURL=app.js.map
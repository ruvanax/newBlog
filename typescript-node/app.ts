const express = require("express");
import {Request, Response, Application, NextFunction} from "express";
const path = require("path");
const bodyParser = require('body-parser');
const createError = require('http-errors');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


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


const app: Application = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  cookie: { maxAge: 8*60*60*1000 },
  secret: 'codeworkrsecret',
  saveUninitialized: false,
  resave: false,
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));

//в миддлвар нужно перенести
app.use((req:Request, res:Response, next:NextFunction) =>{
  if(req.session){
    res.locals.user = req.session.user;
    next();
  }
});

app.get('/rest/me', (req:Request, res:Response) =>{
  res.json("{'Sosat': 'lalki2'}");
});

// app.use('/', indexRouter);
app.use('/rest/users', usersRouter);
app.use('/rest/posts', postsRouter);

// catch 404 and forward to error handler
app.use((request, response, next) =>{
	next(createError(404));
});

// error handler
app.use(function(err: any, req:Request, res:Response, next:NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = err;

  res.status(err.status || 500).send(err.message);
});




export = app;
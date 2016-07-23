"use strict";

import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
//import session from "express-session";
//import connectMongo from "connect-mongo";
//import mongoose from "mongoose";

//const mongoStore = connectMongo(session);

export default function(app) {
  //app.use(compression);
  app.use(bodyParser.json());

/*
  app.use(session({
    secret: "secret-here",
    saveUninitialized: true,
  	resave: false,
  	store: new mongoStore({
  		mongooseConnection: mongoose.connection,
  		db: 'losub'
    })
  }));
*/
  app.use(express.static("./src/dist"));
}

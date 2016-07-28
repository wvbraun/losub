"use strict";

import express from "express";
// import compression from "compression";
import bodyParser from "body-parser";


export default function(app) {
//  app.use("/static", express.static("public"));
  app.use('/public', express.static(__dirname + '/public'));
  // app.use(express.static("../public"));
}

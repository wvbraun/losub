"use strict";

import express from "express";
// import compression from "compression";
import bodyParser from "body-parser";


export default function(app) {
  app.use(bodyParser.json());
//  app.use("/static", express.static("public"));
  app.use('/static', express.static(__dirname + '../app/public'));
  app.use(express.static("../public"));
}

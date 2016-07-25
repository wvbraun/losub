"use strict";

import express from "express";
// import compression from "compression";
import bodyParser from "body-parser";


export default function(app) {
  app.use(bodyParser.json());
  app.use(express.static("./app/dist"));
}

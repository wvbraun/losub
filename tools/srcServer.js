"use strict";

import open from "open";
import path from "path";
import express from "express";
import webpack from "webpack";
import mongoose from "mongoose";
import config from "../config";
import Clyp from "../src/models/Clyp";
import webpackConfig from "../webpack.config.dev";

// import logger from "morgan";

/* eslint-disable no-console */

const app = express();
const compiler = webpack(webpackConfig);

mongoose.connect(config.database);
mongoose.connection.on("error", () => {
    console.info("Error: Could not connect to MongoDB. Did you forget to run `mongod`");
});

app.disable("etag");
app.set("port", process.env.PORT || 8080);
// app.use(logger("dev"));
app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", function(req, res) {
  res.sendFile(path.join( __dirname, "../src/index.html"));
});

const port = app.get("port");
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Express server listening on port " + port);
    open(`http://localhost:${port}`);
  }
});

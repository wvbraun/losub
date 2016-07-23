"use strict";

import open from "open";
import path from "path";
import routes from "./routes";
import express from "express";
import webpack from "webpack";
import mongoose from "mongoose";
import expressConfig from "./config/express";
import webpackConfig from "../webpack.config.dev";

// import logger from "morgan";

/* eslint-disable no-console */

const app = express();
const compiler = webpack(webpackConfig);

const database = process.env.MONGO_URI || "mongodb://localhost/losub";

mongoose.connect(database);
mongoose.connection.on("error", () => {
    console.info("Error: Could not connect to MongoDB. Did you forget to run `mongod`");
//    console.error(err)
    //process.exit(-1);
});

app.disable("etag");
app.set("port", port);
// app.use(logger("dev"));
app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

expressConfig(app);
routes(app);

app.get("*", function(req, res) {
  res.sendFile(path.join( __dirname, "../src/index.html"));
});

const port = process.env.PORT || 8080;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Express server listening on port " + port);
    open(`http://localhost:${port}`);
  }
});

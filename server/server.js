"use strict";

import cors from "cors";
import open from "open";
import path from "path";
import routes from "./routes";
import express from "express";
import webpack from "webpack";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import webpackConfig from "../webpack.config.dev";
import wpDevMiddleware from "webpack-dev-middleware";
import wpHotMiddleware from "webpack-hot-middleware";

// import logger from "morgan";

/* eslint-disable no-console */

const app = express();
const compiler = webpack(webpackConfig);

const port = process.env.PORT || 8080;
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
app.use(wpDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(wpHotMiddleware(compiler));

app.use(cors());
app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/public'));
routes(app);

app.get("*", function(req, res) {
  res.sendFile(path.join( __dirname, "../app/index.html"));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Express server listening on port " + port);
    open(`http://localhost:${port}`);
  }
});

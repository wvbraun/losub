"use strict";

import express from "express";
import Clyp from "./clyp.model";

//import parser from "body-parser";
// this could also be in a ../routes dir, and perhaps it should be..

//  router.use(parser.json());

const router = express.Router();

const errorHandler = (res, err = null, status = 500) => {
  return res.status(status).json(err);
}

router.get("/playlists", (req, res, next) => {
  Clyp.find({}, (err, clyps) => {
    if (err) {
      console.log(err);
      return errorHandler(res, { err: err }, 500);
    }
    if (!clyps) {
      return errorHandler(res, { err: err }, 404);
    }

    return res.status(200).json(clyps);
  })
});

router.post("/playlist", (req, res, next) => {
  debugger;
  console.log(req.body);
  let clyp = new Clyp(req.body);
  clyp.save((err) => {
    if (err) {
      return errorHandler(res, { err: err }, 400);
    }
    return res.status(200).json(clyp);
  })
});

export default router;

/*
Clyp.find({}, {name:1, playlistId: 1, _playlistId: 0}, (err, data) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ msg: "internal server error" });
        }

        res.json(data);
      });

      */

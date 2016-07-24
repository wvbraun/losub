"use strict";

import express from "express";
import Clyp from "./clyp.model";
import fetch from "isomorphic-fetch";

// this could also be in a ../routes dir, and perhaps it should be..

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
    console.log(clyps[0]);
    return res.status(200).json(clyps);
  })
});

router.post("/playlist", (req, res, next) => {
  let playlist = req.body;
  let config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  };

  fetch("https://api.clyp.it/playlist", config)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
      playlist = Object.assign({}, playlist, { PlaylistId: json.PlaylistId });
      let clyp = new Clyp(playlist);
      clyp.save((err) => {
        if (err) {
          return errorHandler(res, { err: err }, 400);
        }
        return res.status(200).json(clyp);
      });
    })
    .catch((error) => {
      throw(error);
    });
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

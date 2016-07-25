"use strict";

import express from "express";
import Clyp from "./clyp.model";
import fetch from "isomorphic-fetch";

// this could also be in a ../routes dir, and perhaps it should be..

const router = express.Router();

const errorHandler = (res, err = null, status = 500) => {
  return res.status(status).json(err);
};

// const _getPlaylist

router.get("/playlists", (req, res, next) => {
  Clyp.find({}, (err, clyps) => {
    if (err) {
      return errorHandler(res, { err: err }, 500);
    }
    if (!clyps) {
      return errorHandler(res, { err: err }, 404);
    }
    return res.status(200).json(clyps);
  });
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
      playlist = Object.assign({}, playlist, { PlaylistId: json.PlaylistId,
                                               PlaylistUploadToken: json.PlaylistUploadToken });
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

router.post("/track", (req, res, next) => {
    let track = req.body;
    let config = {
      method: "Post",
      body: "",
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "multipart/form-data"
      }
    };

    fetch("https://upload.clyp.it/upload", config)
      .then((response) => {
        return response.json();
      })
      .then((_track) => {
        track = Object.assign({}, _track);

      })
      .catch((error) => {
          throw(error);
      });
});

export default router;

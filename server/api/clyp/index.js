"use strict";

import fetch from "node-fetch";
import Clyp from "./clyp.model";
import express from "express";
import HttpsProxyAgent from "https-proxy-agent";
import FormData from "form-data";

// this could also be in a ../routes dir, and perhaps it should be..

const router = express.Router();
// const agent = new HttpsProxyAgent("http://naproxy.gm.com:80");

const errorHandler = (res, err = null, status = 500) => {
  return res.status(status).json(err);
};

// const _getPlaylist

router.get('/tracks', (req, res, next) => {
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
    // agent: agent,
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
    playlist = Object.assign({},
      playlist, { PlaylistId: json.PlaylistId, PlaylistUploadToken: json.PlaylistUploadToken });
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

router.post('/upload', (req, res, next) => {
  console.log("inside clyp server api: track");
//  console.log("body " + req.body);
  const _track = req.body;
  console.log("body " + _track);
  let form = new FormData();
  form.append("audioFile", JSON.stringify(_track));
  const settings = {
    method: "POST",
    body: form
  };
  fetch("https://upload.clyp.it/upload", settings)
    .then((response) => {
      return response.json();
    })
    .then((savedTrack) => {
      console.log(savedTrack);
      let clyp = new Clyp(savedTrack);
      clyp.save((err) => {
        if (err) {
          return errorHandler(res, { err: err}, 400);
        }
        return res.status(200).json(clyp);
      });
    })
    .catch((error) => {
      console.log(error)
      throw(error);
    });
});

export default router;

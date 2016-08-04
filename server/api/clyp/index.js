"use strict";

import fetch from "node-fetch";
import path from 'path';
import mime from 'mime';
// import fetch from "fetch-jsonp";
import Clyp from "./clyp.model";
import express from "express";
import HttpsProxyAgent from "https-proxy-agent";
import FormData from "form-data";
import multer from "multer";
import fs from "fs";
import mkdirp from "mkdirp";

// this could also be in a ../routes dir, and perhaps it should be..

const router = express.Router();
const agent = new HttpsProxyAgent("http://naproxy.gm.com:80");

//const storage = multer.memoryStorage();
// const upload = multer({ storage: multer.memoryStorage() });
/*
const upload = multer({
  dest: 'server/tmp/uploads',
  rename: (fieldname, filename, req, res) => {
    return fieldname + '_' + filename + '-' + Date.now();
  }
});
*/

const errorHandler = (res, err = null, status = 500) => {
  return res.status(status).json(err);
};

const uploadPath = "./server/tmp/uploads";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const filename = file.originalname;
    const ext = path.extname(filename);
    cb(null, path.basename(filename, ext) + '_' + Date.now() + ext);
  }
});

const upload = multer({ storage: storage });


const removeFile = (file) => {
  fs.stat(file, (err, stats) => {
    if (err) {
      throw err;
    } else {
      fs.unlink(file, (err) => {
        if (err) {
          throw err;
        }
      });
    }
  });
};


mkdirp.sync(uploadPath);

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

router.post('/upload', upload.single('audioFile'), (req, res, next) => {
  const form = new FormData();
  form.append("audioFile", fs.createReadStream(req.file.path));
  /*
  this should work, but for some reason req.file.buffer is not a real Buffer.
  fs.readFile(Buffer.from(req.file.buffer.toString('binary')), (err, data) => {
    if (err) {
      throw err;
    } else {
      form.append("audioFile", data);
    }
  });
  */
  // agent: agent
  const settings = {
    agent: agent,
    method: 'POST',
    body: form
  };

  fetch('https://upload.clyp.it/upload', settings)
    .then((response) => {
      removeFile(req.file.path);
      return response.json();
    })
    .then((track) => {
      const clyp = new Clyp(track);
      clyp.save((err) => {
        if (err) {
          return errorHandler(res, { err: err}, 400);
        }
        return res.status(200).json(clyp);
      });
    })
    .catch((error) => {
      throw(error);
    });
});

/*
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
*/


export default router;

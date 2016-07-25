"use strict";

import fetch from "isomorphic-fetch";

const configHandler = (method, body = null) => {
  let config = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  };

  if (body) {
    config.body = body;
  }
  return config;
};

class ClypApi {
  static getAllPlaylists() {
      return new Promise((resolve, reject) => {
        fetch("/api/clyps/playlists")
          .then((response) => {
              return response.json();
          })
          .then((playlists) => {
            resolve(Object.assign([], playlists));
          })
          .catch((error) => {
            throw(error);
          });
      });
  }

  static savePlaylist(playlist) {
    let _playlist = Object.assign({}, playlist);
    let config = {
      method: "POST",
      body: JSON.stringify(_playlist),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    };

    return new Promise((resolve, reject) => {
      fetch("/api/clyps/playlist", config)
        .then((response) => {
          return response.json();
        })
        .then((savedPlaylist) => {
          const minLength = 1;
          if (savedPlaylist.Title.length < minLength) {
            reject(`Name must be at least ${minLength} characters.`);
          } else {
            resolve(Object.assign({}, savedPlaylist));
          }
        })
        .catch((error) => {
          throw(error);
        });
    });
  }

  static deletePlaylist(playlist) {

  }

  static saveTrack(track) {
      let _track = Object.assign({}, track);
      let config = {
        method: "POST",
        body: JSON.stringify(_track),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };

      return new Promise((resolve, reject) => {
        fetch("/api/clyps/track", config)
          .then((response) => {
            return response.json();
          })
          .then((savedTrack) => {
            const minLength = 1;
            if (savedTrack.Title.length < minLength) {
              reject(`Name must be at least ${minLength} characters.`);
            } else {
              resolve(Object.assign({}, savedTrack));
            }
          })
          .catch((error) => {
            throw(error);
          });
      });
    }

}

export default ClypApi;

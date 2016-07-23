"use strict";

import fetch from "isomorphic-fetch";

class ClypApi {
  static getAllPlaylists() {
      return new Promise((resolve, reject) => {
        fetch("/api/clyps/playlists")
          .then((response) => {
              response.json();
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
            response.json()
              .then((playlist) => {
                const minLength = 1;
                debugger;
                if (playlist.Name.length < minLength) {
                  reject(`Title must be at least ${minLength} characters`);
                } else {
                  resolve(Object.assign({}, playlist));
                }
              });
            })
          .catch((error) => {
            throw(error);
          });
    });
/*

    return new Promise((resolve, reject) => {
        fetch("/api/clyps/playlist", config)
          .then((response) => {
            response.json()
              .then((playlist) => {
                ({ playlist, response })
              });
            })
            .then(({ playlist, response }) => {
              if (!response.ok) {
                reject(playlist);
              }

              const minLength = 1;
              if (playlist.Name.length < minLength) {
                reject(`Title must be at least ${minLength} characters`);
              } else {
                resolve(Object.assign({}, playlist));
              }
          })
          .catch((error) => {
            throw(error);
          });
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minPlalyistNameLength = 1;
        if (playlist.Name.length < minPlalyistNameLength) {
          reject(`Title must be at least ${minPlalyistNameLength} characters.`);
        }

        if (playlist.PlaylistId) {
          const existingPlaylistIndex = playlists.findIndex(p => p.PlaylistId == playlist.PlaylistId);
          playlists.splice(existingPlaylistIndex, 1, playlist);
        } else {
          playlist.PlaylistId = _generateId();
          playlists.push(playlist);
        }
        resolve(playlist);
      }, delay);
    });
    */
  }

  static deletePlaylist(playlist) {

  }
}

export default ClypApi;

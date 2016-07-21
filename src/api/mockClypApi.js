"use strict";

import delay from "./delay";

const playlists = [
  {
    "Name": "test",
    "PlaylistId": "f3qoylju",
    "AudioFiles": [
      {
        "ListenCount": 0,
        "CommentCount": 0,
        "FavoriteCount": 0,
        "Status": "DownloadDisabled",
        "CommentsEnabled": true,
        "Category": "None",
        "AudioFileId": "pm45qvtb",
        "Title": "Henry Krinkle - Stay (1) - F-sharp Minor - 130",
        "Duration": 7.471,
        "Url": "https://clyp.it/pm45qvtb",
        "Mp3Url": "http://a.clyp.it/pm45qvtb.mp3",
        "SecureMp3Url": "https://a.clyp.it/pm45qvtb.mp3",
        "OggUrl": "http://a.clyp.it/pm45qvtb.ogg",
        "SecureOggUrl": "https://a.clyp.it/pm45qvtb.ogg",
        "DateCreated": "2016-07-21T15:33:34.287"
      }
    ],
    "Modifiable": false,
    "ContentAdministrator": false,
    "FeatureSubmissionEligibility": "Ineligible"
  }
];

const tracks = [

];

const _generateId = () => {
  return Math.random().toString(36).substr(2,8);
};

class ClypApi {
  static getAllPlaylists() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(Object.assign([], playlists));
        }, delay);
      });
  }

  static getAllTracks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assigne([], tracks));
      }, delay);
    });
  }

  static savePlaylist(playlist) {
    playlist = Object.assign({}, playlist); // immutable, so need to avoid mutating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minPlalyistNameLength = 1;
        if (playlist.Name.length < minPlalyistNameLength) {
          reject(`Title must be at least ${minPlalyistNameLength} characters.`);
        }

        if (playlist.PlaylistId) {
          const existingPlaylistIndex = playlists.findIndex(p => p.id == playlist.id);
          playlists.splice(existingPlaylistIndex, 1, playlist);
        } else {
          playlist.PlaylistId = _generateId();
          //playlist.watchHref = `https://clyp.it/playlist/${playlist.playlistId}`;
          playlists.push(playlist);
        }
        resolve(playlist);
      }, delay);
    });
  }

  static deletePlaylist(playlist) {
    
  }
}

export default ClypApi;

"use strict";

const delay = 1000;

const playlists = [
  {
    "Title": "test",
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
  {
    "ListenCount": 7,
    "CommentCount": 0,
    "FavoriteCount": 0,
    "Status": "DownloadDisabled",
    "CommentsEnabled": true,
    "Category": "None",
    "User": {
      "FirstName": "sublo",
      "UserId": "dwq5jmii",
      "ProfilePictureUrl": "https://d2cjvbryygm0lr.cloudfront.net/default-profile-picture-2.png",
      "PublicProfileUrl": "https://clyp.it/user/dwq5jmii"
    },
    "AudioFileId": "3aoi0tc2",
    "Title": "test2",
    "Duration": 197.329,
    "Url": "https://clyp.it/3aoi0tc2",
    "Mp3Url": "http://a.clyp.it/3aoi0tc2.mp3",
    "SecureMp3Url": "https://a.clyp.it/3aoi0tc2.mp3",
    "OggUrl": "http://a.clyp.it/3aoi0tc2.ogg",
    "SecureOggUrl": "https://a.clyp.it/3aoi0tc2.ogg",
    "DateCreated": "2016-07-30T04:30:30.907"
  }
];

const _generateId = () => {
  return Math.random().toString(36).substr(2,8);
};

class ClypApi {
  static getAllTracks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], tracks));
      }, delay);
    });
  }

  static getAllPlaylists() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(Object.assign([], playlists));
        }, delay);
      });
  }

  static saveTrack(track) {
    track = Object.assign({}, track);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
          track.AudioFileId = _generateId();
          tracks.push(track);
        }, delay);
    });
  }

  static savePlaylist(playlist) {
    playlist = Object.assign({}, playlist);

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
  }

  static deletePlaylist(playlist) {

  }
}

export default ClypApi;

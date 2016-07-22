"use strict";

import ClypApi from "../api/mockClypApi";
import types from "./actionTypes";

export function loadPlaylistsSuccess(playlists) {
  return { type: types.LOAD_PLAYLISTS_SUCCESS, playlists };
}

export function createPlaylistSuccess(playlist) {
    return { type: types.CREATE_PLAYLIST_SUCCESS, playlist };
}

export function createTrackSuccess(track) {
  return { type: types.CREATE_TRACK_SUCCESS, track };
}

export function loadPlaylists() {
  return (dispatch) => {
      return ClypApi.getAllPlaylists()
        .then((playlists) => {
          dispatch(loadPlaylistsSuccess(playlists));
        })
        .catch((error) => {
          throw(error);
        });
  };
}

export function savePlaylist(playlist) {
  return (dispatch) => {
    return ClypApi.savePlaylist(playlist)
      .then((savedPlaylist) => {
        dispatch(createPlaylistSuccess(savedPlaylist));
      })
      .catch((error) => {
        throw(error);
      });
  };
}

export function saveTrack(track) {
  return (dispatch) => {
    return ClypApi.saveTrack(track)
      .then((savedTrack) => {
        dispatch(createTrackSuccess(savedTrack));
      })
      .catch((error) => {
        throw(error);
      });
  };
}

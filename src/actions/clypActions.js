"use strict";

import ClypApi from "../api/mockClypApi";
import * as types from "./actionTypes";


export function loadPlaylistsSuccess(playlists) {
  return { type: types.LOAD_PLAYLISTS_SUCCESS, playlists };
}

export function loadTracksSuccess(tracks) {
  return { type: types.LOAD_TRACKS_SUCCESS, tracks };
}

export function createPlaylistSuccess(playlist) {
    return { type: types.CREATE_PLAYLIST_SUCCESS, playlist };
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

export function savePlaylist() {
  return (dispatch) => {
    return ClypApi.savePlaylist()
      .then((playlist) => {
        dispatch(createPlaylistSuccess(playlist));
      })
      .catch((error) => {
        throw(error);
      });
  };
}

export function loadTracks() {
  return (dispatch) => {
    return ClypApi.getAllTracks()
      .then((tracks) => {
        dispatch(loadTracksSuccess(tracks));
      })
      .catch((error) => {
        throw(error);
      });
  };
}

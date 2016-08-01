"use strict";

import initialState from "./initialState";
import types from "../actions/actionTypes";

// TODO: refactor bc playlist stuff should not be in here, we only
// want to expose tracks to the client, the only reason we want playlists
// is so that we are not creating a new playlist each time we upload a track
// (bc clyp creates a playlist for each uploaded track).

export default function clypReducer(state = initialState.tracks, action) {
  switch (action.type) {
    case types.LOAD_TRACKS_SUCCESS:
      return action.tracks;

    case types.CREATE_TRACK_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.track)
      ];

    case types.LOAD_PLAYLISTS_SUCCESS:
      return action.playlists;

    case types.CREATE_PLAYLIST_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.playlist)
      ];

    /*case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter((course) => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    */

    default:
      return state;
  }
}

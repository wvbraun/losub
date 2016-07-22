"use strict";

import initialState from "./initialState";
import types from "../actions/actionTypes";

export default function clypPlaylistReducer(state = initialState.playlist, action) {
  switch (action.type) {
    case types.LOAD_TRACKS_SUCCESS:
      debugger;
      return action.playlist;

    case types.CREATE_TRACK_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.playlist)
      ];

    default:
      return state;
  }
}

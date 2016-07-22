"use strict";

import initialState from "./initialState";
import types from "../actions/actionTypes";

export default function clypReducer(state = initialState.playlists, action) {
  switch (action.type) {
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

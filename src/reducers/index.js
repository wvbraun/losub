"use strict";

import { combineReducers } from "redux";
import playlists from "./clypPlaylistsReducer";
import playlist from "./clypPlaylistReducer";

const rootReducer = combineReducers({
  playlist: playlist,
  playlists: playlists
});

export default rootReducer;

"use strict";

import { combineReducers } from "redux";
import playlists from "./clypPlaylistReducer";

const rootReducer = combineReducers({
  playlists: playlists
});

export default rootReducer;

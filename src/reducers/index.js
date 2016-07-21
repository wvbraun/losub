"use strict";

import { combineReducers } from "redux";
import playlists from "./clypListReducer";

const rootReducer = combineReducers({
  playlists: playlists
});

export default rootReducer;

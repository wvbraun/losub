"use strict";

import { combineReducers } from "redux";
import playlists from "./clypReducer";

const rootReducer = combineReducers({
  playlists: playlists
});

export default rootReducer;

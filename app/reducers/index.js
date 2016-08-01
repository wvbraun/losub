"use strict";

import { combineReducers } from "redux";
import tracks from "./clypReducer";

const rootReducer = combineReducers({
  tracks: tracks
});

export default rootReducer;

"use strict";

import mongoose from "mongoose";

const clypSchema = mongoose.Schema({
  name: String,
  playlistId: String,
  audioFiles: Array,
  modifiable: Boolean,
  contentAdministrator: Boolean,
  featureSubmissionEligibility: String
});

export default mongoose.model("Clyp", clypSchema);

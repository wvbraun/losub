"use strict";


import mongoose from "mongoose";

const schema = mongoose.Schema({
  Name: String,
  PlaylistId: String,
  AudioFiles: Array,
  Modifiable: Boolean,
  ContentAdministrator: Boolean,
  FeatureSubmissionEligibility: String
});

export default mongoose.model("Clyp", schema);

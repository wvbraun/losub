"use strict";

import Clyp from "../models/Clyp";

export default function(stream, io) {
  stream.on("data", (data) => {
      const clyp = {
        name: "",
        playlistId: data["PlaylistId"],
        audioFiles: data["AudioFiles"],
        modifiable: data["Modifiable"],
        contentAdministrator: data["ContentAdministrator"],
        featureSubmissionEligibility: data["FeatureSubmissionEligibility"]
      };

      const clypEntry = new Clyp(clyp);

      clypEntry.save((err) => {
        if (!err) {
          io.emit("clyp", clyp);
        }
      });
  });
}

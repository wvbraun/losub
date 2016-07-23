"use strict";

import Clyp from "./models/Clyp";

export default function(stream, io) {
  stream.on("data", (data) => {
      const clyp = {
        Name: "",
        PlaylistId: data["PlaylistId"],
        AudioFiles: data["AudioFiles"],
        Modifiable: data["Modifiable"],
        ContentAdministrator: data["ContentAdministrator"],
        FeatureSubmissionEligibility: data["FeatureSubmissionEligibility"]
      };

      const clypEntry = new Clyp(clyp);

      clypEntry.save((err) => {
        if (!err) {
          io.emit("clyp", clyp);
        }
      });
  });
}

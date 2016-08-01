"use strict";

import clyp from "./api/clyp";

export default function(app) {
  app.use("/api/clyp", clyp);
}

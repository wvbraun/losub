"use strict";

import React, { PropTypes } from "react";
import ClypListRow from "./ClypListRow";

const ClypList = ({ tracks }) => {
  return (
    <div className="audio-cards">
      {tracks.map((track, i) =>
        <ClypListRow key={i} track={track} />
      )}
    </div>
  );
};

ClypList.propTypes = {
  tracks: PropTypes.array.isRequired
};

export default ClypList;

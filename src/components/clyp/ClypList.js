"use strict";

import React, { PropTypes } from "react";
import ClypTrackRow from "./ClypTrackRow";

const ClypList = ({tracks}) => {
  return (
    <table>
      <thead>
      </thead>
      <tbody>
      {tracks.map((track) =>
          <ClypTrackRow key={track.id} track={track} />
      )}
      </tbody>
    </table>
  );
};

ClypList.propTypes = {
  tracks: PropTypes.array.isRequired
};

export default ClypList;

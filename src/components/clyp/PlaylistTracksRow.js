"use strict";

import React, { PropTypes } from "react";
import { Link } from "react-router";

const PlaylistTracksRow = ({ track }) => {
  return (
      <tr>
        <td>{track.Title}</td>
        <td>{track.Duration}</td>
        <td>{track.ListenCount}</td>
      </tr>
  );
};

PlaylistTracksRow.propTypes = {
  track: PropTypes.object.isRequired
};

export default PlaylistTracksRow;

"use strict";

import React, { PropTypes } from "react";
import { Link } from "react-router";

const ClypPlaylistRow = ({ playlist }) => {
  return (
      <tr>
        <td><Link to={"/clyps/playlist/" + playlist.PlaylistId}>{playlist.Name}</Link></td>
        <td>0</td>
      </tr>
  );
};

ClypPlaylistRow.propTypes = {
  playlist: PropTypes.object.isRequired
};

export default ClypPlaylistRow;

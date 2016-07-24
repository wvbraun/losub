"use strict";

import React, { PropTypes } from "react";
import { Link } from "react-router";

const ClypsListRow = ({ playlist }) => {
  return (
      <tr>
        <td><Link to={"/clyps/playlists/" + playlist.PlaylistId}>{playlist.Name}</Link></td>
        <td>0</td>
      </tr>
  );
};

ClypsListRow.propTypes = {
  playlist: PropTypes.object.isRequired
};

export default ClypsListRow;

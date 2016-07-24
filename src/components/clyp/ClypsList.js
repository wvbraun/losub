"use strict";

import React, { PropTypes } from "react";
import ClypsListRow from "./ClypsListRow";

const ClypsList = ({ playlists }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th># Tracks</th>
        </tr>
      </thead>
      <tbody>
      {playlists.map((playlist, i) =>
          <ClypsListRow key={i} playlist={playlist} />
      )}
      </tbody>
    </table>
  );
};

ClypsList.propTypes = {
  playlists: PropTypes.array.isRequired
};

export default ClypsList;

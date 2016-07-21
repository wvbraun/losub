"use strict";

import React, { PropTypes } from "react";
import ClypPlaylistRow from "./ClypPlaylistRow";

const ClypPlaylist = ({ playlists }) => {
  return (
    <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th># Tracks</th>
          </tr>
        </thead>
        <tbody>
        {playlists.map((playlist) =>
            <ClypPlaylistRow key={playlist.PlaylistId} playlist={playlist} />
        )}
        </tbody>
  </table>
  );
};

ClypPlaylist.propTypes = {
  playlists: PropTypes.array.isRequired
};

export default ClypPlaylist;

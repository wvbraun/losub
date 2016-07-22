"use strict";

import React, { PropTypes } from "react";
import PlaylistTracksRow from "./PlaylistTracksRow";

const PlaylistTracks = ({ playlist }) => {
  const _tracks = playlist.AudioFiles;
  return (
    <div>
      <h1 className="pull-left">playlist.Name</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Length</th>
            <th>Listen Count</th>
          </tr>
        </thead>
        <tbody>
        {_tracks.map((track) =>
            <PlaylistTracksRow track={track} />
        )}
        </tbody>
      </table>
    </div>
  );
};

PlaylistTracks.propTypes = {
  playlist: PropTypes.object.isRequired
};

export default PlaylistTracks;

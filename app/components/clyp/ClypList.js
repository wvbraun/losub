"use strict";

import React, { PropTypes } from "react";
import ClypListRow from "./ClypListRow";

const ClypList = ({ playlist }) => {
  const tracks = playlist.AudioFiles;
  return (
    <div>
      <h1 className="pull-left">{playlist.Title}</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Length</th>
            <th>Listen Count</th>
          </tr>
        </thead>
        <tbody>
        {tracks.map((track) =>
            <ClypListRow key={track.AudioFileId} track={track} />
        )}
        </tbody>
      </table>
    </div>
  );
};

ClypList.propTypes = {
  playlist: PropTypes.object.isRequired
};

export default ClypList;

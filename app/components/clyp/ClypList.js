"use strict";

import React, { PropTypes } from "react";
import ClypListRow from "./ClypListRow";

const ClypList = ({ tracks }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12">
          <table className="transparent-table">
            <thead>
            </thead>
            <tbody>
            {tracks.map((track, i) =>
              <ClypListRow key={i} track={track} />
            )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

ClypList.propTypes = {
  tracks: PropTypes.array.isRequired
};

export default ClypList;
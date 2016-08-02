"use strict";

import React, { PropTypes } from "react";
import Iframe from "react-iframe";

/*

<div className="audio-card">
      <div className="small-12 columns">
      </div>
    </div>
<div className="card-player">
          <div className="play-button small">
            <div className="play-button-icon">
            </div>
          </div>
          <div className="pause-button small">
            <div className="pause-button-icon">
            </div>
          </div>
        </div>
        */

const ClypListRow = ({ track }) => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <Iframe url={`${track.Url}/widget`} width="100%" height="160px" frameborder="0"/>
      </div>
    </div>
  );
};

ClypListRow.propTypes = {
  track: PropTypes.object.isRequired
};

export default ClypListRow;

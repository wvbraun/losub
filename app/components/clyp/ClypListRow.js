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

const styles = {
  width: '100%',
  height: '160px',
  borderWidth: '0px'
};

const ClypListRow = ({ track }) => {
  return (
    <tr>
      <td>
        <iframe src={`${track.Url}/widget`} style={styles}></iframe>
      </td>
    </tr>
  );
};

ClypListRow.propTypes = {
  track: PropTypes.object.isRequired
};

export default ClypListRow;

"use strict";

import React, { PropTypes } from "react";
import Iframe from "react-iframe";

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

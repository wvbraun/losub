"use strict";

import React, { PropTypes } from "react";
import { Link } from "react-router";
import UploadModal from "../common/UploadModal";
import * as clypActions  from "../../actions/clypActions";

const ClypHeader = ({ track, onDrop }) => {
  return (
    <div className="fixed-elements row">
      <header id="clyp-header">
        <div className="fixed-header">
          <Link to="/" className="clyp-logo-wrapper">
            <img src="/public/img/logo/clyp-logo-primary-98x44.svg" className="clyp-logo" alt="Clyp logo"/>
          </Link>
          <div className="nav-actions">
            <UploadModal
              onDrop={onDrop}
              bsStyle="primary"
              bsSize="small"
            />
          </div>
        </div>
      </header>
    </div>
  );
};


ClypHeader.propTypes = {
  track: PropTypes.object.isRequired,
  onDrop: PropTypes.func.isRequired
};


export default ClypHeader;

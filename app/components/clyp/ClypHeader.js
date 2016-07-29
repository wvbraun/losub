"use strict";

import React, { PropTypes } from "react";
import { Link } from "react-router";
import UploadModal from "../common/UploadModal";

const ClypHeader = function() {
  return (
    <div className="fixed-elements">
      <header id="clyp-header">
        <div className="fixed-header">
          <Link to="/" className="clyp-logo-wrapper">
            <img src="/public/img/logo/clyp-logo-primary-98x44.svg" className="clyp-logo" alt="Clyp logo"/>
          </Link>
          <div className="nav-actions">
            <div className="nav-action">
              <UploadModal classes="button upload-button primary tiny" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

ClypHeader.propTypes = {
};

export default ClypHeader;

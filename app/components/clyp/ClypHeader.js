"use strict";

import React from "react";
import { Link } from "react-router";

const ClypHeader = function() {
  return (
    <div className="fixed-elements">
      <header id="clyp-header">
        <div className="fixed-header">
          <Link to="/" className="clyp-logo-wrapper">
            <img src="/public/img/logo/clyp-logo-primary-98x44.svg" className="clyp-logo" alt="Clyp logo"/>
          </Link>
          <div className="nav-actions">
            <button className="nav-action button upload-button primary tiny">Upload</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ClypHeader;

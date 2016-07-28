"use strict";

import React from "react";

const ClypHeader = function() {
  return (
    <header id="clyp-header">
      <div className="fixed-header">
        <a className="logo-wrapper" href="/">
          <img src="/public/img/logo/clyp-logo-primary-98x44.svg" className="logo" alt="Clyp logo"/>
        </a>
        <div className="nav-actions">
          <button className="nav-action button upload-button primary tiny">Upload</button>
        </div>
      </div>
    </header>
  );
};

export default ClypHeader;

"use strict";

import React, { PropTypes } from "react";
import ClypListRow from "./ClypListRow";
import ClypHero from "./ClypHero";


/*
<div class="tabs-wrapper">
        <div class="flex-row tabs">
          <div class="small-12 columns">
            <div class="tabs" data-bind="foreach: tabs">
              <div class="tab" data-bind="text: name, click: $parent.switchTab, css: {'active': $parent.isActiveTab($data), 'inactive': !$parent.isActiveTab($data)}"></div>
            </div>
          </div>
        </div>
        */

const tabs = ["Tracks", "Playlists", "Recent"];

const ClypList = ({ tracks }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <ClypHero />
        <div className="tabs-wrapper">
          <div className="row tabs">
            <div className="col-sm-12">
              <div className="tabs">
                {tabs.map((tab, i) =>
                  <div key={i} className="tab">
                  {tab}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="tabs-content">
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
      </div>
    </div>
  );
};

ClypList.propTypes = {
  tracks: PropTypes.array.isRequired
};

export default ClypList;

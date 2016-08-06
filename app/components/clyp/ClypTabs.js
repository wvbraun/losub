"use strict";

import React, { PropTypes } from "react";
import ClypList from "./ClypList";
import ClypHero from "./ClypHero";
import {Tabs, Tab } from "react-tab-view";

const headers = ['Clyps', 'Playlists', 'Recent'];

const ClypTabs = ({ clyps }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <ClypHero />
        <Tabs headers={headers}>
          <Tab><ClypList tracks={clyps} /></Tab>
          <Tab><p>Playlists</p></Tab>
          <Tab><p>Recent</p></Tab>
        </Tabs>
      </div>
    </div>
  );
};

ClypTabs.propTypes = {
  clyps: PropTypes.array.isRequired
};

export default ClypTabs;

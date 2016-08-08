"use strict";

import React, { PropTypes } from "react";
import ClypList from "./ClypList";
import ClypHero from "./ClypHero";
//import { Tabs, Tab } from "react-tab-view";
import { Tabs, Tab } from "react-bootstrap";

const headers = ['Clyps', 'Playlists', 'Recent'];

/*
<Tabs headers={headers}>
        <Tab><ClypList tracks={clyps} /></Tab>
        <Tab><p>Playlists</p></Tab>
        <Tab><p>Recent</p></Tab>
      </Tabs>
*/
const ClypTabs = ({ clyps }) => {
  return (
    <div className="clyp-tabs-wrapper row">
      <Tabs defaultActiveKey={1} id="clyp-tabs">
        <Tab eventKey={1} title="Clyps">
          <ClypList tracks={clyps} />
        </Tab>
        <Tab eventKey={2} title="Playlists">
          <p>Playlists</p>
        </Tab>
      </Tabs>
    </div>
  );
};

ClypTabs.propTypes = {
  clyps: PropTypes.array.isRequired
};

export default ClypTabs;

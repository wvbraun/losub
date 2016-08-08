"use strict";

import React, { PropTypes } from "react";
import ClypList from "./ClypList";
//import { Tabs, Tab } from "react-tab-view";
import { Tabs, Tab, Row, Col, Nav, NavItem } from "react-bootstrap";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const headers = ['Clyps', 'Playlists', 'Recent'];

/*
<Tabs headers={headers}>
        <Tab><ClypList tracks={clyps} /></Tab>
        <Tab><p>Playlists</p></Tab>
        <Tab><p>Recent</p></Tab>
      </Tabs>



      <Tabs selectedIndex={0}>
        <TabList>
          <Tab>Clyps</Tab>
          <Tab>Playlist</Tab>
          <Tab>Settings</Tab>
        </TabList>
        <TabPanel>
          <ClypList tracks={clyps} />
        </TabPanel>
        <TabPanel>
          <h2>Playlists</h2>
        </TabPanel>
        <TabPanel>
          <h2>Settings</h2>
        </TabPanel>
      </Tabs>
*/

//Tabs.setUseDefaultStyles(false);
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
        <Tab eventKey={3} title="Settings">
          <p>Settings</p>
        </Tab>
      </Tabs>
    </div>
  );
};

ClypTabs.propTypes = {
  clyps: PropTypes.array.isRequired
};

export default ClypTabs;

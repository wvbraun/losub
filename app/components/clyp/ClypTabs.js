"use strict";

import React, { PropTypes } from "react";
import ClypList from "./ClypList";
import ClypHero from "./ClypHero";
//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Tabs, Tab } from "react-tab-view";
//import TabPanel from 'react-tab-panel';
//import 'react-tab-panel/index.css';

//Tabs.setUseDefaultStyles(false);

/*
      <div className="row">
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

<Tabs selectedIndex={0}>
          <TabList>
            <Tab>Clyps</Tab>
            <Tab>Playlists</Tab>
            <Tab>Recent</Tab>
          </TabList>
          <TabPanel>
            <ClypList tracks={clyps} />
          </TabPanel>
          <TabPanel>
            <h2>Playlists</h2>
          </TabPanel>
          <TabPanel>
            <h2>Recent</h2>
          </TabPanel>
        </Tabs>
*/

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

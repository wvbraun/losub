"use strict";

import React, { PropTypes } from "react";
import ClypList from "./ClypList";
import ClypHero from "./ClypHero";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

Tabs.setUseDefaultStyles(false);

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
*/

const ClypTabs = ({ clyps }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <ClypHero />
        <Tabs selectedIndex={0}>
          <div className="tabs-wrapper">
            <div className="row tabs">
              <div className="col-sm-12">
                <div className="tabs">
                  <TabList>
                    <div className="tab"><Tab>Clyps</Tab></div>
                    <div className="tab"><Tab>Playlists</Tab></div>
                    <div className="tab"><Tab>Recent</Tab></div>
                  </TabList>
                </div>
              </div>
            </div>
          </div>
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
      </div>
    </div>
  );
};

ClypTabs.propTypes = {
  clyps: PropTypes.array.isRequired
};

export default ClypTabs;

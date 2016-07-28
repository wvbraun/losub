"use strict";

import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/app";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
// import ClypsPage from "./components/clyp/ClypsPage";
import ClypPage from "./components/clyp/ClypPage";
import NewTrackPage from "./components/clyp/NewTrackPage";
import NewPlaylistPage from "./components/clyp/NewPlaylistPage";
import NotFoundPage from "./components/common/NotFoundPage";

/*
<Route path="/clyps/playlist" component={NewPlaylistPage} />
    <Route path="/clyps/:id" component={ClypPage} />
    <Route path="/clyps/:id/track" component={NewTrackPage} />
    <Route path="*" component={NotFoundPage} />
  */

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/clyp" component={ClypPage} />
  </Route>
);

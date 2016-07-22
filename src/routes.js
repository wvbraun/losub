"use strict";

import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/app";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import ClypsPage from "./components/clyp/ClypsPage";
import PlaylistPage from "./components/clyp/PlaylistPage";
import CreatePlaylistPage from "./components/clyp/CreatePlaylistPage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/clyps" component={ClypsPage} />
    <Route path="/clyps/playlist" component={CreatePlaylistPage} />
    <Route path="/clyps/playlist/:id" component={PlaylistPage} />
  </Route>
);

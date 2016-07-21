"use strict";

import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/app";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import ClypPage from "./components/clyp/ClypPage";


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="clyp" component={ClypPage} />
  </Route>
);

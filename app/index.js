"use strict";

import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import routes from "./routes";
import { loadTracks, loadPlaylists } from "./actions/clypActions";
import "./styles/styles.styl";
//import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const store = configureStore();
// store.dispatch(loadPlaylists());
store.dispatch(loadTracks());

render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById("app")
);

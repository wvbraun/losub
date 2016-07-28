"use strict";

import React, { PropTypes } from "react";
import Header from "./common/Header";
import Sidebar from "./common/Sidebar";

// import { connect } from "react-redux";


class App extends React.Component {
  render() {
    return (
      <Sidebar>
        {this.props.children}
      </Sidebar>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

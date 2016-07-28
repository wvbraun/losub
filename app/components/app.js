"use strict";

import React, { PropTypes } from "react";
import Header from "./common/Header";
import Sidebar from "./common/Sidebar";

// import { connect } from "react-redux";


class App extends React.Component {
  render() {
    return (
      <div className="site-container">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

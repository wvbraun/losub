"use strict";

import React, { PropTypes } from "react";
import Header from "./common/Header";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router";
import Radium from "radium";

// import { connect } from "react-redux";

const RadiumLink = Radium(Link);

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Menu>
          <RadiumLink className="menu-item" to="/">Home</RadiumLink>
        </Menu>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

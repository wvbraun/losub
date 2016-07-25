"use strict";

import React, { PropTypes } from "react";
import Sidebar from "react-sidebar";
import Header from "./common/Header";
// import { connect } from "react-redux";

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      mql: null,
      sidebarOpen: false,
      sidebarDocked: false
    };

    this.onSidebarOpen = this.onSidebarOpen.bind(this);
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
  }

  componentWillMount() {
    const mql = window.matchMedia(`(min-width: 800px)`);
    mql.addListener(this.mediaQueryChanged);
    this.setState({ mql: mql, sidebarDocked: mql.matches });
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: this.state.mql.matches });
  }

  render() {
    const sidebarContent = <b>tmp</b>;

    return (
      <div className="container-fluid">
        <Sidebar sidebar={sidebarContent}
                 open={this.state.sidebarOpen}
                 docked={this.state.sidebarDocked}
                 onSetOpen={this.onSidebarOpen}>
          {this.props.children}
        </Sidebar>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

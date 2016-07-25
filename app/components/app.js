"use strict";

import React, { PropTypes } from "react";
import Header from "./common/Header";
import Sidebar from "react-sidebar";
import SidebarTitlePanel from "./common/SidebarTitlePanel";
import SidebarContent from "./common/SidebarContent";

// import { connect } from "react-redux";

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
};

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      touch: true,
      transitions: true,
      shadow: true
    };

    this.onSetOpen = this.onSetOpen.bind(this);
    this.menuButtonClick = this.menuButtonClick.bind(this);
  }

  onSetOpen(open) {
    this.setState({ open: open });
  }

  menuButtonClick(event) {
    event.preventDefault();
    this.onSetOpen(!this.state.open);
  }


  render() {
    const sidebarContent = <SidebarContent />;

    const contentHeader = (
      <span>
        <a onClick={this.menuButtonClick} href="#" style={styles.contentHeaderMenuLink}>=</a>
        <span>Sidebar</span>
      </span>
    );

    const sidebarProps = {
      sidebar: sidebarContent,
      sidebarClassName: "custom-sidebar-class",
      open: this.state.open,
      touch: this.state.touch,
      shadow: this.state.shadow,
      transitions: this.state.transitions,
      onSetOpen: this.onSetOpen
    };

/*
    <div className="container-fluid">
        {this.props.children}
      </div>
      */
    return (
      <Sidebar {...sidebarProps}>
        <SidebarTitlePanel title={contentHeader}>
          <div style={styles.content}>
            {this.props.children}
          </div>
        </SidebarTitlePanel>
      </Sidebar>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

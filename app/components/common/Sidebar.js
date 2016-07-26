"use strict";

import React, { PropTypes } from "react";
import ReactSidebar from "react-sidebar";
import SidebarTitlePanel from "./SidebarTitlePanel";
import SidebarContent from "./SidebarContent";

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

class Sidebar extends React.Component {
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

    return (
      <ReactSidebar {...sidebarProps}>
        <SidebarTitlePanel title={contentHeader}>
          <div style={styles.content}>
            {this.props.children}
          </div>
        </SidebarTitlePanel>
      </ReactSidebar>
    );
  }
}

Sidebar.propTypes = {
  children: PropTypes.object
};

export default Sidebar;

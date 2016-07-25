"use strict";

import React, { PropTypes } from 'react';
import { Link } from "react-router";
import SidebarTitlePanel from "./SidebarTitlePanel";

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  },
};

const SidebarContent = (props) => {
  const style = styles.sidebar;
  if (props.style) {
    Object.assign({}, style, props.style);
  }

  const links = [];

  for (let ind = 0; ind < 10; ind++) {
    links.push(
      <a key={ind} href="#" style={styles.sidebarLink}>Mock menu item {ind}</a>);
  }

  return (
    <SidebarTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
        <Link to="/" style={styles.sidebarLink}>Home</Link>
        <div style={styles.divider} />
        {links}
      </div>
    </SidebarTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;

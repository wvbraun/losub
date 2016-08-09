"use strict";

import React from "react";
import { Link, IndexLink } from "react-router";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links footer-section">
        <ul className="link-list">
          <li><Link to="/clyp" activeClassName="active">Clyp</Link></li>
          <li><Link to="/about" activeClassName="active">About</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

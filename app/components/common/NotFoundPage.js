
"use strict";

import React from "react";
import { Link } from "react-router";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>Whoops! Sorry nothing to see here.</p>
        <p><Link to="/">Back to Home</Link></p>
      </div>
    );
  }
}

export default NotFoundPage;

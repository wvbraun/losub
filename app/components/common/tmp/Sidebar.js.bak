"use strict";

import React, { PropTypes } from "react";

class Sidebar extends React.component {
    constructor(props, context) {
      super(props, context);

      this.state = {
          visible: false
      };

      this.hide = this.hide.bind(this);
    }

    show() {
      this.setState({ visible: true });
      document.addEventListener("click", this.hide);
    }

    hide() {
      document.removeEventListener("click", this.hide);
      this.setState({ visible: false });
    }

    render() {
      return (
        <div className="menu">
          <div className={(this.state.visible ? "visible" : "")}>
              {this.props.children}
          </div>
        </div>
      );
    }
}

Sidebar.propTypes = {
  children: PropTypes.object.isRequired
};

export default Sidebar;

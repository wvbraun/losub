"use strict";

// i hate using jquery, need it for toastr atm.
import * as $ from "jquery";
import React, { PropTypes } from "react";
import Header from "./common/Header";
import Sidebar from "./common/Sidebar";
import Footer from "./common/footer";

// import { connect } from "react-redux";

        //<Header />

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

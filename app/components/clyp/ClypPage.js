"use strict";

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import ClypHeader from "./ClypHeader";
import * as clypActions  from "../../actions/clypActions";

class ClypPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isShowingModal: false,
      errors: {}
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick() {
    this.setState({ isShowingModal: true });
  }

  handleClose() {
    this.setState({ isShowingModal: false });
  }

  render() {
    const { playlists } = this.props;
    return (
      <div>
        <ClypHeader />
      </div>
    );
  }
}

ClypPage.propTypes = {
  playlists: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    playlists: state.playlists
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(clypActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClypPage);

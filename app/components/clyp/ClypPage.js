"use strict";

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import ClypHeader from "./ClypHeader";
import * as clypActions  from "../../actions/clypActions";
import ClypTabs from "./ClypTabs";


class ClypPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { tracks } = this.props;
    return (
      <div>
        <ClypHeader />
        <ClypTabs clyps={tracks} />
      </div>
    );
  }
}

ClypPage.propTypes = {
  tracks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    tracks: state.tracks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(clypActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClypPage);

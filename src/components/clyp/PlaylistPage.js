"use strict";

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PlaylistTracks from "./PlaylistTracks";
import * as clypActions  from "../../actions/clypActions";

class PlaylistPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    debugger;
    const playlist = this.props.playlist;
    return (
      <PlaylistTracks playlist={playlist} />
    );
  }
}

PlaylistPage.propTypes = {
  playlist: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    playlist: state.playlist
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(clypActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPage);

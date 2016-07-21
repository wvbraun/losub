"use strict";

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import ClypPlaylist from "./ClypPlaylist";
import SelectInput from "../common/SelectInput";
import * as clypActions  from "../../actions/clypActions";

class ClypsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToCreatePlaylistPage = this.redirectToCreatePlaylistPage.bind(this);
  }

  redirectToCreatePlaylistPage() {
    browserHistory.push("/clyps/playlist");
  }

  render() {
    const { playlists } = this.props;
    return (
      <div>
        <h1 className="pull-left">Clyps</h1>
        <div className="pull-right">
          <input type="submit"
                 value="Add Playlist"
                 className="btn btn-primary"
                 onClick={this.redirectToCreatePlaylistPage} />
        </div>
        <ClypPlaylist playlists={playlists} />
      </div>
    );
  }
}

ClypsPage.propTypes = {
  playlists: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  debugger;
  return {
    playlists: state.playlists
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(clypActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClypsPage);

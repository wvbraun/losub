"use strict";

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import ClypsList from "./ClypsList";
import * as clypActions  from "../../actions/clypActions";

class ClypsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToNewPlaylistPage = this.redirectToNewPlaylistPage.bind(this);
  }

  redirectToNewPlaylistPage() {
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
                 onClick={this.redirectToNewPlaylistPage} />
        </div>
        <ClypsList playlists={playlists} />
      </div>
    );
  }
}

ClypsPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ClypsPage);

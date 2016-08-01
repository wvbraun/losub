"use strict";

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import ClypList from "./ClypList";
import * as clypActions  from "../../../actions/clypActions";

class ClypPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      playlist: Object.assign({}, this.props.playlist),
      errors: {}
    };

    this.redirectToNewTrackPage = this.redirectToNewTrackPage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.playlist.PlaylistId !== nextProps.playlist.PlaylistId) {
      this.setState({ playlist: Object.assign({}, nextProps.playlist) });
    }
  }

  redirectToNewTrackPage() {
    browserHistory.push(`/clyps/{this.state.playlist.PlaylistId}/track`);
  }

  render() {
    return (
      <div>
        <div className="pull-right">
            <input type="submit"
                   value="Add Track"
                   className="btn btn-primary"
                   onClick={this.redirectToNewTrackPage} />
          </div>
        <ClypList playlist={this.state.playlist} />
      </div>
    );
  }
}

ClypPage.propTypes = {
  playlist: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function getPlaylistById(playlists, id) {
  const _playlists = playlists.filter((playlist) => playlist.PlaylistId == id);
  if (_playlists.length) {
    return _playlists[0] ;
  }
  return null;
}

function mapStateToProps(state, ownProps) {
  const playlistId = ownProps.params.id;

  let playlist = { Name: "", PlaylistId: "", AudioFiles: [], Modifiable: "", ContentAdministrator: "", FeatureSubmissionEligibility: "" };

  if (playlistId && state.playlists.length > 0) {
    playlist = getPlaylistById(state.playlists, playlistId);
  }

  return {
    playlist: playlist
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(clypActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClypPage);

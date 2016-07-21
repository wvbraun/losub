"use strict";

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CreatePlaylistForm from "./CreatePlaylistForm";
import * as clypActions from "../../actions/clypActions";

class CreatePlaylistPage extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.state = {
        playlist: Object.assign({}, this.props.playlist),
        errors: {}
      };

      this.savePlaylist = this.savePlaylist.bind(this);
      this.updatePlaylistState = this.updatePlaylistState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.playlist.PlaylistId !== nextProps.playlist.PlaylistId) {
      this.setState({ playlist: Object.assign({}, nextProps.playlist) });
    }
  }

  updatePlaylistState(event) {
    const field = event.target.name;
    let playlist = this.state.playlist;
    playlist[field] = event.target.value;
    return this.setState({ playlist: playlist });
  }

  savePlaylist(event) {
    event.preventDefault();
    this.props.actions.savePlaylist(this.state.playlist)
      .then(() => this.redirect());
  }

  redirect() {
    this.context.router.push("/clyps");
  }

  render() {
    return (
      <div>
        <CreatePlaylistForm
          playlist={this.state.playlist}
          onSave={this.savePlaylist}
          onChange={this.updatePlaylistState}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

CreatePlaylistPage.propTypes = {
  playlist: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//  router is available on this.context.router
CreatePlaylistPage.contextTypes = {
  router: PropTypes.object
};

// use lodash instead
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
    playlist: playlist,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(clypActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylistPage);

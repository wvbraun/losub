"use strict";

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import NewTrackForm from "./NewTrackForm";
import * as clypActions from "../../actions/clypActions";

class NewTrackPage extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.state = {
        track: Object.assign({}, this.props.track),
        errors: {}
      };

      this.saveTrack = this.saveTrack.bind(this);
      this.updateTrackState = this.updateTrackState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.track.AudioFileId !== nextProps.track.AudioFileId) {
      this.setState({ track: Object.assign({}, nextProps.track) });
    }
  }

  updateTrackState(event) {
    const field = event.target.name;
    let track = this.state.track;
    track[field] = event.target.value;
    return this.setState({ track: track });
  }

  saveTrack(event) {
    event.preventDefault();
    this.props.actions.saveTrack(this.state.track)
      .then(() => this.redirect());
  }

  redirect() {
    this.context.router.push("/clyps");
  }

  render() {
    return (
      <div>
        <NewTrackForm
          track={this.state.track}
          onSave={this.saveTrack}
          onChange={this.updateTrackState}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

NewTrackPage.propTypes = {
  track: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

NewTrackPage.contextTypes = {
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
  const audioTrackId = ownProps.params.id;

  let track = {
    "ListenCount": null, "CommentCount": null, "FavoriteCount": null, "Status": "",
    "CommentsEnabled": null, "Category": "None", "AudioFileId": "", "Title": "",
    "Duration": null, "Url": "", "Mp3Url": "", "SecureMp3Url": "", "OggUrl": "",
    "SecureOggUrl": "", "DateCreated": ""
  };

/*
  if (audioTrackId && state.playlists.length > 0) {
    playlist = getPlaylistById(state.playlists, playlistId);
  } */

  return {
    track: track,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(clypActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTrackPage);

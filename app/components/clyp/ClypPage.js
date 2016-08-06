"use strict";

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import ClypHeader from "./ClypHeader";
import * as clypActions  from "../../actions/clypActions";
import toastr from "toastr";
import ClypTabs from "./ClypTabs";


class ClypPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      track: Object.assign({}, this.props.track),
      errors: {}
    };

    this.saveTrack = this.saveTrack.bind(this);
    this.updateTrackState = this.updateTrackState.bind(this);
  }
/*
  componentWillReceiveProps(nextProps) {
    if (this.props.track.audioFileId !== nextProps.track.audioFileId) {
      this.setState({ track: Object.assign({}, nextProps.track) });
    }
  }
  */

  updateTrackState(event) {
    const field = event.target.name;
    let track = this.state.track;
    track[field] = event.target.value;
    return this.setstate({ track: track });
  }

  saveTrack(event) {
    this.props.actions.saveTrack(event[0])
      .then(() => {
        toastr.success("File uploaded successfully!");
      })
      .catch((err) => {
        toastr.error(err);
      });
  }

  render() {
    const { track, tracks } = this.props;
    return (
      <div>
        <ClypHeader track={track} onDrop={this.saveTrack}/>
        <ClypTabs clyps={tracks} />
      </div>
    );
  }
}

ClypPage.propTypes = {
  track: PropTypes.object.isRequired,
  tracks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let track = { "ListenCount": 0, "CommentCount": 0, "FavoriteCount": 0, "Status": "",
                "CommentsEnabled": false, "Category": "",
                "User": { "FirstName": "", "UserId": "", "ProfilePictureUrl": "", "PublicProfileUrl": ""},
                "AudioFileId": "", "Title": "", "Duration": 0, "Url": "", "Mp3Url": "",
                "SecureMp3Url": "", "OggUrl": "", "SecureOggUrl": "", "DateCreated": ""
              };
  return {
    track: track,
    tracks: state.tracks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(clypActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClypPage);

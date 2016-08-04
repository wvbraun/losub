"use strict";

import React, { PropTypes } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UploadModal from "../common/UploadModal";
import toastr from "toastr";
import * as clypActions  from "../../actions/clypActions";

class ClypHeader extends React.Component {
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
      if (this.props.track.audioFileId !== nextProps.track.audioFileId) {
        this.setState({ track: Object.assign({}, nextProps.track) });
      }
    }

  updateTrackState(event) {
    const field = event.target.name;
    let track = this.state.track;
    track[field] = event.target.value;
    return this.setstate({ track: track });
  }

  // event = array of Files, we have disabled multiple files, so
  // only an array of one File object.
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
    return (
      <div className="fixed-elements">
        <header id="clyp-header">
          <div className="fixed-header">
            <Link to="/" className="clyp-logo-wrapper">
              <img src="/public/img/logo/clyp-logo-primary-98x44.svg" className="clyp-logo" alt="Clyp logo"/>
            </Link>
            <div className="nav-actions">
              <div className="nav-action">
                <UploadModal
                  onDrop={this.saveTrack}
                  classes="button upload-button primary tiny"
                />
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

ClypHeader.propTypes = {
  track: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function _getTrackById(tracks, id) {

}

function mapStateToProps(state, ownProps) {
  let track = { "ListenCount": 0, "CommentCount": 0, "FavoriteCount": 0, "Status": "",
                "CommentsEnabled": false, "Category": "",
                "User": { "FirstName": "", "UserId": "", "ProfilePictureUrl": "", "PublicProfileUrl": ""},
                "AudioFileId": "", "Title": "", "Duration": 0, "Url": "", "Mp3Url": "",
                "SecureMp3Url": "", "OggUrl": "", "SecureOggUrl": "", "DateCreated": ""
              };
  return {
    track: track,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(clypActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClypHeader);

"use strict";

import React, { PropTypes } from "react";
import { ModalContainer, ModalDialog } from "react-modal-dialog";
import Dropzone from "react-dropzone";

class UploadModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isShowingModal: false
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
    return (
      <div>
        <button className={this.props.classes} type="submit" onClick={this.handleClick}>Upload</button>
        {this.state.isShowingModal &&
          <ModalContainer onClose={this.handleClose}>
            <ModalDialog onClose={this.handleClose}>
              <div className="upload-modal">
                <div className="widget-wrapper">
                  <div className="upload-zone">
                    <Dropzone multiple={false} onDrop={this.props.onDrop}>
                      <span>dropzone</span>
                    </Dropzone>
                    <div className="upload-text">
                      <p>upload-text</p>
                    </div>
                  </div>
                </div>
              </div>
            </ModalDialog>
          </ModalContainer>
        }
      </div>
    );
  }
}

UploadModal.propTypes = {
  classes: PropTypes.string,
  onDrop: PropTypes.func.isRequired
};

export default UploadModal;

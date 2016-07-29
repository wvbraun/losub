"use strict";

import React, { PropTypes } from "react";
import { ModalContainer, ModalDialog } from "react-modal-dialog";

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
              <h1>modal content</h1>
            </ModalDialog>
          </ModalContainer>
        }
      </div>
    );
  }
}

UploadModal.propTypes = {
  classes: PropTypes.string
};

export default UploadModal;

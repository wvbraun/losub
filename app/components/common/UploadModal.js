"use strict";

import React, { PropTypes } from "react";
import { ModalContainer, ModalDialog } from "react-modal-dialog";
import Dropzone from "react-dropzone";

const tabs = [
  {
    name: 'Upload'
  }
];

class UploadModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button className={this.props.classes} type="submit" onClick={this.openModal}>Upload</button>
        {this.state.modalIsOpen &&
          <ModalContainer onClose={this.closeModal}>
            <ModalDialog onClose={this.closeModal}>
              <div className="upload-modal">
                <div className="widget-wrapper">
                  <ul className="source-tabs row">
                    {tabs.map((tab) =>
                      <li className="tab small-12 columns">{tab.name}</li>
                    )}
                  </ul>
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

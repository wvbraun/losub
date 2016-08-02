"use strict";

import React, { PropTypes } from "react";
import { ModalContainer, ModalDialog } from "react-modal-dialog";
import Modal from "react-modal";
import Dropzone from "react-dropzone";

class UploadModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  afterOpenModal() {
    this.refs.subtitle.style.color = '#f00';
  }

  render() {
    return (
      <div>
        <button className={this.props.classes} type="submit" onClick={this.openModal}>Upload</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onClose={this.closeModal} >
          <h2 ref="subtitle">subtitle</h2>
          <button onClick={this.closeModal}>Close</button>
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
        </Modal>
      </div>
    );
  }
}

UploadModal.propTypes = {
  classes: PropTypes.string,
  onDrop: PropTypes.func.isRequired
};

export default UploadModal;

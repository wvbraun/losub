"use strict";

import React, { PropTypes } from "react";
import { ModalContainer, ModalDialog } from "react-modal-dialog";
import Dropzone from "react-dropzone";

const tabs = ["Upload"];

const terms = "By uploading you agree to Clyp's Terms";

class UploadModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isModalOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  onDrop(e) {
    this.props.onDrop(e);
    this.toggleModal();
  }

  render() {
    return (
      <div>
        <button className={this.props.classes} type="submit" onClick={this.toggleModal}>Upload</button>
        {this.state.isModalOpen &&
          <ModalContainer onClose={this.toggleModal}>
            <ModalDialog onClose={this.toggleModal}>
              <div className="upload-modal-wrapper">
                <div className="widget-wrapper">
                  <ul className="source-tabs">
                    {tabs.map((tab, i) =>
                      <li key={i} className="tab small-12 columns is-active">{tab}</li>
                    )}
                  </ul>
                  <div className="default-tabs-content upload-tabs">
                    <div className="upload-tab tab active">
                      <Dropzone className="dropzone" multiple={false} onDrop={this.onDrop}>
                        <div className="upload-zone">
                          <div className="upload-icon"></div>
                          <div className="upload-text">
                            Drop in an audio file or click to upload
                          </div>
                        </div>
                      </Dropzone>
                      <div className="row terms-clause-wrapper">
                        <div className="terms-clause">{terms}</div>
                      </div>
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

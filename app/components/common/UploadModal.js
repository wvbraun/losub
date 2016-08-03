"use strict";

import React, { PropTypes } from "react";
import createRemodal from 'react-remodal';
import 'react-remodal/styles/main.css';
import Dropzone from "react-dropzone";
import FontAwesome from "react-fontawesome";


const Remodal = createRemodal({
  classes: {
    'dialog': 'react-remodal__dialog upload-modal-wrapper'
  }
});

const tabs = [
  {
    name: 'Upload'
  }
];

class UploadModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isModalOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  render() {
    return (
      <div>
        <button className={this.props.classes} type="submit" onClick={this.toggleModal}>Upload</button>
        <Remodal isOpen={this.state.isModalOpen} onClose={this.toggleModal}>
            <div className="upload-modal">
              <div className="widget-wrapper">
                <ul className="source-tabs">
                  {tabs.map((tab, i) =>
                    <li key={i} className="tab small-12 columns is-active">{tab.name}</li>
                  )}
                </ul>
                <div className="default-tabs-content upload-tabs">
                  <div className="upload-tab tab active">
                    <Dropzone className="dropzone" multiple={false} onDrop={this.props.onDrop}>
                      <div className="upload-zone">
                        <div className="upload-icon"></div>
                        <div className="upload-text">
                          <p align="center">Drop in an audio file or click to upload</p>
                        </div>
                      </div>
                    </Dropzone>
                  </div>
                </div>
              </div>
            </div>
        </Remodal>
      </div>
    );
  }
}

UploadModal.propTypes = {
  classes: PropTypes.string,
  onDrop: PropTypes.func.isRequired
};

export default UploadModal;

import React from 'react';
import Page from 'Components/Page.jsx';

import ImageGallery from 'Components/ImageGallery.jsx';
import ImageModal from 'Components/ImageModal.jsx';

import PhotographyConfig from './Photography.json';

export default class Photography extends React.Component {
  state = {
    modalImage: null,
    isModalVisible: false
  };

  showModal = (img) => {
    this.setState({
      modalImage: img,
      isModalVisible: true
    });
  }

  hideModal = () => {
    this.setState({
      modalImage: null,
      isModalVisible: false
    });
  }

  showModal(img) {
    this.setState({
      modalImage: img,
      isModalVisible: true
    });
  }

  hideModal() {
    this.setState({
      modalImage: null,
      isModalVisible: false
    });
  }

  render() {
    return (
      <Page title="Photography" id="Photography">
        <h1 className="PageTitle">Photography</h1>
        <ImageGallery images={PhotographyConfig} onClick={this.showModal} />

        {this.state.isModalVisible && (
          <ImageModal onClose={this.hideModal} image={this.state.modalImage} />
        )}
      </Page>
    )
  }
}
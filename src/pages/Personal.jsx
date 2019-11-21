import React from 'react';
import Page from 'Components/Page.jsx';

import ImageGallery from 'Components/ImageGallery.jsx';
import ImageModal from 'Components/ImageModal.jsx';

import PersonalConfig from './Personal.json';

export default class Personal extends React.Component {
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

  render() {
    return (
      <Page title="Personal" id="Personal">
        <h1 className="PageTitle">Personal</h1>
        <ImageGallery images={PersonalConfig} onClick={this.showModal} />

        {this.state.isModalVisible && (
          <ImageModal onClose={this.hideModal} image={this.state.modalImage} />
        )}
      </Page>
    )
  }
}
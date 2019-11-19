import React from 'react';
import Page from 'Components/Page.jsx';

import ImageGallery from 'Components/ImageGallery.jsx';
import ImageModal from 'Components/ImageModal.jsx';

import IllustrationsConfig from './Illustrations.json';

export default class Illustrations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalImage: null,
      isModalVisible: false
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
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
      <Page title="Illustrations" id="Illustrations">
        <h1 className="PageTitle">Illustrations</h1>
        <ImageGallery images={IllustrationsConfig} onClick={this.showModal} />

        {this.state.isModalVisible && (
          <ImageModal onClose={this.hideModal} image={this.state.modalImage} />
        )}
      </Page>
    )
  }
}
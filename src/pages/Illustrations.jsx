import React from 'react';
import Page from 'Components/Page.jsx';

import Image from 'Components/Image.jsx';
import Modal from 'Components/Modal.jsx';

import IllustrationsConfig from './Illustrations.json';
import './Illustrations.scss';

class PictureBox extends React.Component {
  render() {
    return (
      <div className="IllustrationsGrid-Box" onClick={this.props.onClick}>
        <Image src={this.props.thumb} />
      </div>
    );
  }
}

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
        <div className="IllustrationsGrid">
          {IllustrationsConfig.map((pic, i) => {
            return <PictureBox key={i} thumb={pic.thumb} onClick={() => this.showModal(pic.image)} />;
          })}
        </div>
        {this.state.isModalVisible && (
          <Modal onClose={this.hideModal}>
            <div className="IllustrationsModalImage">
              <Image src={this.state.modalImage} style={{ width: "100%" }} />
            </div>
          </Modal>
        )}
      </Page>
    )
  }
}
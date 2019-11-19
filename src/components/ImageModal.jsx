import React from 'react';

import Image from './Image.jsx';
import Modal from './Modal.jsx';

import './ImageModal.scss';

export default class ImageModal extends React.Component {
  render() {
    return (
      <Modal onClose={this.props.onClose}>
        <div className="ImageModal-Image">
          <Image src={this.props.image} lazy={false} />
        </div>
      </Modal>
    );
  }
}
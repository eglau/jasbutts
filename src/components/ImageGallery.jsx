import React from 'react';
import PropTypes from 'prop-types';

import Image from 'Components/Image.jsx';

import './ImageGallery.scss';

export default class ImageGallery extends React.Component {
  static get propTypes() {
    return {
      images: PropTypes.arrayOf(PropTypes.object),
      onClick: PropTypes.func
    }
  }
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(img) {
    if (this.props.onClick) {
      this.props.onClick(img);
    }
  }

  render() {
    return (
      <div className="ImageGallery">
        {this.props.images.map((pic, i) => {
          return (
            <div key={i} className="ImageGallery-Thumb" onClick={() => this.handleClick(pic.image)}>
              <Image src={pic.thumb} />
            </div>
          );
        })}
      </div>
    )
  }
}
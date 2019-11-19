import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import './Image.scss';

class Image extends React.Component {
  static get propTypes() {
    return {
      src: PropTypes.string.isRequired,
      lazy: PropTypes.bool
    };
  }

  render() {
    if (this.props.lazy === false) {
      return (
        <img src={this.props.src} {...this.props.style} />
      );
    }
    return (
      <LazyLoad>
        <img src={this.props.src} {...this.props.style} />
      </LazyLoad>
    );
  }
}

export default Image;
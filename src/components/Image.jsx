import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import './Image.scss';

class Image extends React.Component {
  static get propTypes() {
    return {
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      title: PropTypes.string,
      lazy: PropTypes.bool
    };
  }

  static get defaultProps() {
    return {
      alt: "jasbutts",
      title: "jasbutts",
      lazy: true
    };
  }

  render() {
    if (this.props.lazy === false) {
      return (
        <img src={this.props.src} alt={this.props.alt} title={this.props.title} />
      );
    }
    return (
      <LazyLoad>
        <img src={this.props.src} alt={this.props.alt} title={this.props.title} />
      </LazyLoad>
    );
  }
}

export default Image;
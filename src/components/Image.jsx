import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import './Image.scss';

class Image extends React.Component {
  static get propTypes() {
    return {
      src: PropTypes.string,
      style: PropTypes.object
    };
  }

  static get defaultProps() {
    return {
      style: {}
    };
  }

  render() {
    // return (
    //   <LazyLoad>
    //     <img src={this.props.src} />
    //   </LazyLoad>
    // );
    return (
      <div className="img">
        <img src={this.props.src} {...this.props.style} />
      </div>
    );
  }
}

export default Image;
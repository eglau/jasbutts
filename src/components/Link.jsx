import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CustomLink extends React.Component {
  static get propTypes() {
    return {
      to: PropTypes.string.isRequired,
    };
  }

  render() {
    // External link
    if (/^https?:\/\//.test(this.props.to)) {
      return <a href={this.props.to} target="_blank" rel="noopener noreferrer">{this.props.children}</a>
    }

    return (
      <Link to={this.props.to}>{this.props.children}</Link>
    );
  }
}

export default CustomLink;
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CustomLink extends React.Component {
  static get propTypes() {
    return {
      to: PropTypes.string.isRequired,
      title: PropTypes.string
    };
  }

  render() {
    // Try to set title if not given
    let title = this.props.title;
    if (!title && typeof this.props.children === 'string') {
      title = this.props.children;
    }

    // External link
    if (/^https?:\/\//.test(this.props.to)) {
      return <a href={this.props.to} target="_blank" rel="noopener noreferrer" title={title}>{this.props.children}</a>
    }

    return (
      <Link to={this.props.to} title={title}>{this.props.children}</Link>
    );
  }
}

export default CustomLink;
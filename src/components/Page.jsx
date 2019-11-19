import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

export default class Page extends React.Component {
  static get propTypes() {
    return {
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    };
  }

  static get defaultProps() {
    return {
      useCustomTitle: false
    };
  }

  render() {
    return (
      <div id={`Page-${this.props.id}`}>
        <Helmet>
          <title>{this.props.title} | Jasmine Ho | Jasbutts</title>
        </Helmet>
        {this.props.children}
      </div>
    )
  }
}
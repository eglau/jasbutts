import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Link from './Link.jsx';
import { withNavigation } from './NavigationProvider.jsx';

import './NavLink.scss';

class NavLink extends React.PureComponent {
  static get propTypes() {
    return {
      to: PropTypes.string.isRequired
    };
  }

  handleNavigationSelect = () => {
    if (this.props.onNavigationSelect) {
      this.props.onNavigationSelect();
    }
  }

  render() {
    const classes = classNames(
      'NavLink',
      this.props.className
    );

    if (this.props.to) {
      return (
        <Link to={this.props.to}>
          <div className={classes} onClick={this.handleNavigationSelect}>
            <span>{this.props.text}</span>
          </div>
        </Link>
      );
    }
    return 
  }
}

export default withNavigation(NavLink);
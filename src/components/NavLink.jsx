import React from 'react';
import classNames from 'classnames';

import Link from './Link.jsx';

import './NavLink.scss';

export default class NavLink extends React.PureComponent {
  render() {
    const classes = classNames(
      'NavLink',
      !this.props.to && !this.props.onClick && 'NavTop',
      this.props.className
    );

    let link;
    if (this.props.to) {
      link = (
        <Link to={this.props.to}>
          <div className={classes}>
            <span>{this.props.text}</span>
          </div>
        </Link>
      );
    } else if (this.props.onClick) {
      link = (
        <div className={classes} onClick={this.props.onClick}>
          <span>{this.props.text}</span>
        </div>
      );
    } else {
      throw new Error('missing prop to or onclick for navlink');
    }

    return <li>{link}</li>;
  }
}
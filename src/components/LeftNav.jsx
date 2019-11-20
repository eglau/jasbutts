import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from './Image.jsx';
import LeftNavAccordion from './LeftNavAccordion.jsx';
import Link from './Link.jsx';
import NavLink from './NavLink.jsx';

import './LeftNav.scss';

export default class LeftNav extends React.Component {
  static get propTypes() {
    return {
      isVisible: PropTypes.bool,
      onClose: PropTypes.func
    }
  };

  static get defaultProps() {
    return {
      isVisible: true
    };
  }

  render() {
    const leftnavClasses = classNames(
      'LeftNav',
      this.props.isVisible ? 'LeftNav-visible' : 'LeftNav-hidden'
    )
    return (
      <React.Fragment>
        <div className={leftnavClasses}>
          <div className="LeftNav-Logo">
            <Link to="/">
                <Image src="/images/sidebar.jpg" lazy={false} />
            </Link>
          </div>
          <ul>
            <NavLink text="Illustrations" to="/illustrations" />
            <LeftNavAccordion title="Projects">
              <NavLink text="Tip of the Hats" to="/tbd" />
              <NavLink text="Esports and LANs" to="/tbd" />
            </LeftNavAccordion>
            
            <LeftNavAccordion title="Photography">
              <NavLink text="Tip of the Hats" to="/tbd" />
              <NavLink text="Esports and LANs" to="/tbd" />
            </LeftNavAccordion>
            <NavLink text="About" to="/about" />
          </ul>
        </div>
        { this.props.isVisible &&
          <div className="LeftNav-MobileShadow" onClick={this.props.onClose} />
        }
      </React.Fragment>
    );
  }
}
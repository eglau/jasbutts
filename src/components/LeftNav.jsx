import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from './Image.jsx';
import LeftNavAccordion from './LeftNavAccordion.jsx';
import Link from './Link.jsx';
import NavLink from './NavLink.jsx';
import { withNavigation } from './NavigationProvider.jsx';

import './LeftNav.scss';

class LeftNav extends React.Component {
  static get propTypes() {
    return {
      isVisible: PropTypes.bool,
      onNavigationSelect: PropTypes.func
    }
  };

  static get defaultProps() {
    return {
      isVisible: true
    };
  }

  handleOutsideClick = () => {
    if (this.props.onNavigationSelect) {
      this.props.onNavigationSelect();
    }
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
            <NavLink text="Personal" to="/personal" />
            <LeftNavAccordion title="Projects">
              <NavLink text="Tip of the Hats" to="/tbd" />
              <NavLink text="Esports and LANs" to="/tbd" />
            </LeftNavAccordion>
            
            <NavLink text="Photography" to="photography" />
            <NavLink text="Storyboarding" to="/storyboarding" />
            <NavLink text="About" to="/about" />
          </ul>
        </div>
        { this.props.isVisible &&
          <div className="LeftNav-MobileShadow" onClick={this.handleOutsideClick} />
        }
      </React.Fragment>
    );
  }
}

export default withNavigation(LeftNav);
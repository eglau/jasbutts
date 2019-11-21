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
      <div className="LeftNav-Wrapper">
        <div className={leftnavClasses}>
          <h1 className="LeftNav-Spacer">&#160;</h1>
          <div className="LeftNav-Logo" onClick={this.handleOutsideClick}>
            <Link to="/">
                <Image src="/images/sidebar.jpg" lazy={false} />
            </Link>
          </div>
          <div className="LeftNav-Name">
            <span>Jasmine Ho</span>
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
      </div>
    );
  }
}

export default withNavigation(LeftNav);
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from 'Components/Image.jsx';
import Link from 'Components/Link.jsx';
import Logo from 'Images/sidebar.jpg';

import './Navbar.scss';

class NavLink extends React.PureComponent {
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

class Navbar extends React.PureComponent {
  render() {
    return (
      <div className="Navbar">
        <Link to="/">
          <div className="logo">
            <Image src={Logo} lazy={false} />
          </div>
        </Link>
        <ul>
          <NavLink text="Illustrations" to="/illustrations" />
          <NavAccordion title="Projects">
            <NavLink text="Tip of the Hats" to="/tbd" />
            <NavLink text="Esports and LANs" to="/tbd" />
          </NavAccordion>
          
          <NavAccordion title="Photography">
            <NavLink text="Tip of the Hats" to="/tbd" />
            <NavLink text="Esports and LANs" to="/tbd" />
          </NavAccordion>
          <NavLink text="About" to="/about" />
        </ul>
      </div>
    );
  }
}

class NavAccordion extends React.PureComponent {
  static get propTypes() {
    return {
      title: PropTypes.string.isRequired
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true
    };

    this.expandAccordion = this.expandAccordion.bind(this);
    this.collapseAccordion = this.collapseAccordion.bind(this);
  }

  expandAccordion() {
    this.setState({
      isCollapsed: false
    });
  }

  collapseAccordion() {
    this.setState({
      isCollapsed: true
    });
  }

  render() {
    const labelClasses = classNames(
      "NavLink",
      !this.state.isCollapsed && "Accordion-visible"
    );
    const subnavClasses = classNames(
      "Navbar-Submenu",
      !this.state.isCollapsed && "menu-visible"
    );

    return (
      <li onMouseEnter={this.expandAccordion} onMouseLeave={this.collapseAccordion}>
        <div className="Accordion">
          <div className={labelClasses}>
            <span>{this.props.title}</span>
          </div>
          <div className={subnavClasses}>
            <ul>
              {React.Children.map(this.props.children, (child) => React.cloneElement(child, { className: 'SubNavLink' }))}
            </ul>
          </div>
        </div>
      </li>
    );
  }
}

export default Navbar;
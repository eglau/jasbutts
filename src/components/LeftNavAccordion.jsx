import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './LeftNavAccordion.scss';

export default class LeftNavAccordion extends React.PureComponent {
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
      "LeftNavAccordion-Submenu",
      !this.state.isCollapsed && "menu-visible"
    );

    return (
      <li onMouseEnter={this.expandAccordion} onMouseLeave={this.collapseAccordion}>
        <div className="LeftNavAccordion">
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
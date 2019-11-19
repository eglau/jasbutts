import React from 'react';

import Image from './Image.jsx';
import LeftNavAccordion from './LeftNavAccordion.jsx';
import Link from './Link.jsx';
import NavLink from './NavLink.jsx';

import './LeftNav.scss';

export default class LeftNav extends React.Component {
  render() {
    return (
      <div className="LeftNav">
        <Link to="/">
          <div className="logo">
            <Image src="/images/sidebar.jpg" lazy={false} />
          </div>
        </Link>
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
    );
  }
}
import React from 'react';

import Image from './Image.jsx';
import Link from './Link.jsx';
import NavLink from './NavLink.jsx';

import './TopNav.scss';

export default class TopNav extends React.Component {
  render() {
    return (
      <div className="TopNav">
        <Link to="/">
          <div className="logo">
            <Image src="/images/sidebar.jpg" lazy={false} />
          </div>
        </Link>
        {/* <ul>
          <NavLink text="Illustrations" to="/illustrations" />
          <NavLink text="Projects" to="/tbd" />
          <NavLink text="Photography" to="/tbd" />
          <NavLink text="About" to="/about" />
        </ul> */}
        <span className="TopNav-text">jasbutts</span>
      </div>
    );
  }
}
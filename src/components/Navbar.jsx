import React from 'react';

import LeftNav from './LeftNav.jsx';
import TopNav from './TopNav.jsx';

class Navbar extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <TopNav />
        <LeftNav />
      </React.Fragment>
    );
  }
}

export default Navbar;
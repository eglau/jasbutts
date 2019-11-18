import React from 'react';

import Routes from './Routes.jsx';
import Navbar from 'Components/Navbar.jsx';

import './styles/style.scss';

class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div id="content">
          <Routes />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
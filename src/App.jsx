import React from 'react';

import Routes from './Routes.jsx';
import Sidebar from 'Components/Sidebar.jsx';

class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Sidebar />
        <div id="mainContent">
          <Routes />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
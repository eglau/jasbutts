import React from 'react';
import { Helmet } from 'react-helmet';

import Routes from './Routes.jsx';
import LeftNav from 'Components/LeftNav.jsx';
import TopNav from 'Components/TopNav.jsx';

import './styles/style.scss';

class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>jasbutts</title>
          <meta name="description" content="test on react-helmet" />
        </Helmet>
        <TopNav />
        <LeftNav />
        <div id="content">
          <Routes />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
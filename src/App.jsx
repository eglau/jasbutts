import React from 'react';
import { Helmet } from 'react-helmet';

import Routes from './Routes.jsx';
import LeftNav from 'Components/LeftNav.jsx';
import NavigationProvider from 'Components/NavigationProvider.jsx';
import MobileHeader from 'Components/MobileHeader.jsx';

import './styles/style.scss';

class App extends React.PureComponent {
  state = {
    isLeftNavVisible: false
  };

  showLeftNav = () => {
    this.setState({ isLeftNavVisible: true });
  }

  hideLeftNav = () => {
    this.setState({ isLeftNavVisible: false });
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>jasbutts</title>
          <meta name="description" content="jasbutts art" />
        </Helmet>
        <MobileHeader onLogoClick={this.showLeftNav} />
        <div id="navigation">
          <NavigationProvider onNavigationSelect={this.hideLeftNav}>
            <LeftNav isVisible={this.state.isLeftNavVisible} />
          </NavigationProvider>
        </div>
        <div id="content">
          <Routes />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
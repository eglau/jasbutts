import React from 'react';
import { Redirect } from 'react-router-dom';

import Image from './Image.jsx';

import './MobileHeader.scss';

export default class TopNav extends React.Component {
  state = {
    redirectToHome: false
  };

  handleLogoClick = () => {
    if (this.props.onLogoClick) {
      this.props.onLogoClick();
    } else {
      this.setState({ redirectToHome: true });
    }
  }
  render() {
    return (
      <div className="MobileHeader">
        <div className="MobileHeader-Logo" onClick={this.handleLogoClick}>
          <Image src="/images/sidebar.jpg" lazy={false} />
        </div>
        <div className="MobileHeader-Content">
          <span className="MobileHeader-Content-Text">jasbutts</span>
        </div>
        {this.state.redirectToHome &&
          <Redirect to="/" />
        }
      </div>
    );
  }
}
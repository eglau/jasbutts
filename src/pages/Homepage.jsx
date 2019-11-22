import React from 'react';

import Page from 'Components/Page.jsx';

class Homepage extends React.PureComponent {
  render() {
    return (
      <Page title="Welcome" id="Homepage">
        <h1 className="PageTitle">Jasbutts</h1>
        <h1>this is the homepage</h1>
        <h2>this is the homepage</h2>
        <p>this is the homepage</p>
      </Page>
    );
  }
}

export default Homepage;
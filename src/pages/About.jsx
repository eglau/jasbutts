import React from 'react';
import { Helmet } from 'react-helmet';

import Page from 'Components/Page.jsx';
import Link from 'Components/Link.jsx';

export default class About extends React.PureComponent {
  render() {
    return (
      <Page title="About Me" id="About">
        <h1 className="PageTitle">About</h1>
        <p>img</p>
        <p>Hello, my name is <strong>Jasmine Ho</strong>!</p>
        <p>I graduated in the spring of 2015 from San Jose State University's Animation/Illustration program, currently based in Los Angeles.</p>
        <p>I love visiting galleries and museums, trying new foods, and casual hiking in the woods. My other great passion is keeping planted freshwater and saltwater aquariums!</p>
        <hr />
        <h2>Contact Information</h2>
        <ul>
          <li>Email</li>
          <li><Link to=""></Link>Blog</li>
          <li><Link to="https://www.linkedin.com/in/jasminehoart"></Link>LinkedIn</li>
          <li><Link to=""></Link>Resume</li>
        </ul>
      </Page>
    );
  }
}
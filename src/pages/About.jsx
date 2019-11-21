import React from 'react';

import Image from 'Components/Image.jsx';
import Page from 'Components/Page.jsx';
import Link from 'Components/Link.jsx';

import './About.scss';

export default class About extends React.PureComponent {
  render() {
    return (
      <Page title="About Me" id="About">
        <h1 className="PageTitle">About Me</h1>
        <div className="About">
          <div className="About-Image">
            <Image src="/images/about.jpg" alt="About me" title="About me" />
          </div>
          <div className="About-Text">
            <p>Hello, my name is <strong>Jasmine Ho</strong>!</p>
            <p>I graduated in the spring of 2015 from San Jose State University's Animation/Illustration program, currently based in Los Angeles.</p>
            <p>I love visiting galleries and museums, trying new foods, and casual hiking in the woods. My other great passion is keeping planted freshwater and saltwater aquariums!</p>
          
            <ul className="About-Contact">
              <li>Email: <a href="mailto:jasminehoart@gmail.com">jasminehoart@gmail.com</a></li>
              <li><Link to="">Blog</Link></li>
              <li><Link to="https://www.linkedin.com/in/jasminehoart">LinkedIn</Link></li>
              <li><Link to="">Resume</Link></li>
            </ul>
          </div>
        </div>
      </Page>
    );
  }
}
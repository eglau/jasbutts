import React from 'react';
import LazyLoad from 'react-lazyload';

import Link from 'Components/Link.jsx';
import Page from 'Components/Page.jsx';

import './Storyboarding.scss';

const IFRAME_OPTIONS = {
  frameBorder: '0',
  marginWidth: '0',
  marginHeight: '0',
  scrolling: 'no',
  allowFullScreen: true
};

class SlideShareIframe extends React.Component {
  render() {
    return (
      <LazyLoad>
        <div className="SlideShareIframe">
          <iframe className="SlideShareIframe-iframe" src={this.props.src} {...IFRAME_OPTIONS}></iframe>
          <div className="SlideShareIframe-title">
            <Link to={this.props.link}>
              {this.props.title}
            </Link>
          </div>
        </div>
      </LazyLoad>
    );
  }
}

class Storyboarding extends React.Component {
  render() {
    return (
      <Page title="Storyboarding" id="Storyboarding">
        <h1 className="PageTitle">Storyboarding</h1>
        <SlideShareIframe src="https://www.slideshare.net/slideshow/embed_code/key/AHTGVmUaVZ9Xhp" link="https://www.slideshare.net/JasmineHo5/bfa-2015-project-1" title="BFA - Fortune Teller [2015]" />
        <SlideShareIframe src="https://www.slideshare.net/slideshow/embed_code/key/mQME6F9GjqujeZ" link="https://www.slideshare.net/JasmineHo5/bfa-2015-final-project" title="BFA 2015 Final Project" />
        <SlideShareIframe src="https://www.slideshare.net/slideshow/embed_code/key/AqFXtKrBybgrTH" link="https://www.slideshare.net/JasmineHo5/test-2-56935325" title="Test 2" />
        <SlideShareIframe src="https://www.slideshare.net/slideshow/embed_code/key/uWpuqOVDbFBg7c" link="https://www.slideshare.net/JasmineHo5/violet-game-beta-cutscene" title="Violet - Game Beta Cutscene" />
        <SlideShareIframe src="https://www.slideshare.net/slideshow/embed_code/key/KZfaWNYpVcIJ48" link="https://www.slideshare.net/JasmineHo5/test-1-56935247" title="Unamed Robotic Show - Test 1 [2016]" />
      </Page>
    )
  }
}

export default Storyboarding;
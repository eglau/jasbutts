import React from 'react';
import { Switch, Route } from 'react-router';

import Homepage from 'Pages/Homepage.jsx';
import About from 'Pages/About.jsx';
import Illustrations from 'Pages/Illustrations.jsx';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/illustrations" component={Illustrations} />

        <Route path="*" render={() => <p>404 not found</p>} />
      </Switch>
    )
  }
}

export default Routes;
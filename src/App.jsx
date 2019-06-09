import React from 'react';
import { Switch, Route } from 'react-router';

class App extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact={true} path="/" render={() => <p>Hello, World!</p>} />

        <Route path="*" render={() => <p>404 not found</p>} />
      </Switch>
    )
  }
}

export default App;
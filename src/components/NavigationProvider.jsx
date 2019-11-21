import React from 'react';

const NavigationContext = React.createContext('navigation');

class NavigationProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onNavigationSelect: this.props.onNavigationSelect
    };
  }

  render() {
    return (
      <NavigationContext.Provider value={this.state}>
        {this.props.children}
      </NavigationContext.Provider>
    );
  }
}

function withNavigation(Component) {
  return (props) => {
    return (
      <NavigationContext.Consumer>
        {(state) => <Component {...Object.assign({}, props, state)} />}
      </NavigationContext.Consumer>
    );
  };
}

export default NavigationProvider;
export { withNavigation, NavigationContext, NavigationProvider }
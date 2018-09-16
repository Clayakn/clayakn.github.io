import React, { Component } from 'react';
import routes from './routes';

// components
import Nav from './components/Nav';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        {routes}
      </div>
    );
  }
}

export default App;

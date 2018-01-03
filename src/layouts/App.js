import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import pages from '../pages';

import '../styles/App.scss';

class App extends Component {
  render() {
    return (
      <Router>
      	<Route path={'/'} component={pages.Home} />
      	<Route path={'/test'} component={pages.Test} />
      </Router>
    );
  }
}

export default App;

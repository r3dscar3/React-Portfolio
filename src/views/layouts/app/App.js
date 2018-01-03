import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as pages from '../../pages/index';

import '../../../styles/common/App.scss';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
      	<header>
      		<div className="header">
      			<h1>Nolan Panther</h1>
      		</div>   
      	</header>
      	<div className="main-section">
      		<main className="content">
			      	<Route path={'/'} component={pages.Home} />
      			<Route path={'/test'} component={pages.Test} />
      		</main>
      	</div>
      </div>
    );
  }
}

export default App;

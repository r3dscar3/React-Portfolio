import '../../../styles/app.scss';

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as pages from '../../pages/index';
import Header from '../../components/header';
import Footer from '../../components/footer';

class App extends Component {
    
  render() {
  	if (!console) {
			console = {};
		}
		
		let old = console.log;
		let logger = document.getElementById('console');
		
		console.log = (message) => {
			if (typeof message === 'object') {
		  	logger.innerHTML += (JSON && JSON.stringify
		    	? JSON.stringify(message)
		    	: String(message)) + '<br />';
		  } else {
		  	logger.innerHTML += message + '<br />';
		  }
		}
		
		console.log('Test');
	
    return (
    	<div className="debug-wrapper">
	      <div id="wrapper">
	      	<header>
	      		<Header />   
	      	</header>
	      	<div className="main-section">
	      		<main className="content">
				      	<Route exact path={'/'} component={pages.Home} />
	      			<Route path={'/test'} component={pages.Test} />
	      		</main>
	      	</div>
	      	<footer>
	      		<Footer />
	      	</footer>
	      </div>
	      <div id="console" />
      </div>
    );
  }
}

export default App;

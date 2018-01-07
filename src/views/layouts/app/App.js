import '../../../styles/app.scss';

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as pages from '../../pages/index';
import Header from '../../components/header';
import Footer from '../../components/footer';

class App extends Component {
	    
  render() {
  
  	console.log('test');
  
    return (
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
	      <div className="console-clear">
	      	<div />
	      </div>
    	</div>
    );
  }
}

export default App;

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import * as layouts from './views/layouts';
import registerServiceWorker from './registerServiceWorker';
import './node_modules/console-log-div/console-log-div.js';
render(
	<BrowserRouter basename={'/'}>
		<Route path="/" component={layouts.App} />
	</BrowserRouter>, document.getElementById('root')
);
registerServiceWorker();

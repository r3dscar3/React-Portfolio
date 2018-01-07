import './styles.scss';

import React, {Component} from 'react';
import MainSet from '../../../images/logo.svg';
import TouchPad from '../../../images/logo.svg';
import TightLine from '../../../images/logo.svg';

const projects = [
	[
		{
			title: "MainSet",
			description: "HubSpot CMS, jquery, bootstrap",
			img: MainSet
		}
	],
	[
		{
			title: "TouchPad Live",
			description: "Angular, jquery, bootstrap",
			img: TouchPad
		}
	],
	[
		{
			title: "TightLine Adventures",
			description: "WordPress, jquery, bootstrap",
			img: TightLine
		}
	]
];

console.log(projects);

class Home extends Component {
	render() {
		return (
			<div className="home-page">
	      {
	      	Object.keys(projects).map(project => 
	      		<div key={project.title} className="project">
	      			<img src={project.img} />
	      			<h2 className="project-title">
	      				{project.title}
	      			</h2>
	      			<p className="project-desc">
	      				{project.description}
	      			</p>
	      		</div>
	      	)
	      }
	    </div>
		)	
	}
}

export default Home;
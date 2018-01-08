import './styles.scss';

import React, {Component} from 'react';
import projects from '../../../utils/projectsAPI';

class Home extends Component {
	render() {
		return (
			<div className="home-page">
	      {
	      	projects.map((project, index) => 
	      		<div key={index} className="project">
	      			<img src={project.img} alt={projects.title} />
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
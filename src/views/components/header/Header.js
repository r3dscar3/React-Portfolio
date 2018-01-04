import './styles.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo.svg';

const Header = () => {
	return (
		<div className="header">
			<Link className="logo" to={'/'}><img src={Logo} alt="Glasses" /></Link>
			<ul className="nav">
				<li>
					<Link to={'/about'}>About Me</Link>
				</li>
				<li>
					<Link to={'/experience'}>Experience</Link>
				</li>
				<li>
					<Link to={'/contact'}>Contact</Link>
				</li>
			</ul>
		</div>
	)
}

export default Header;
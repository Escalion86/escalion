import React, {Component} from 'react';
import logoMini from '../../img/logo-dev-mini.png';

import './header.css';

export default class Header extends Component {
	
	render() {
		return (
			<>
			<header>
				<a href="http://escalion.ru" className="logo"><img src={logoMini} alt="logo"  /></a>
				<ul>
					<li><a href="#home">Home</a></li>
					<li><a href="#portfolio">Portfolio</a></li>
				</ul>
			</header>
			</>
		)
	}
}
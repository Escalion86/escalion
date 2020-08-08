import React, {Component} from 'react';
import logo from '../../img/logo-dev.png';

import './header.css';

export default class Header extends Component {
	render() {
		return (
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="title">
					Aleksei Belinskiy
				</h1>
				<h3 className="subtitle">
					FullStack Web Developer
				</h3>
				Page under construction
			</header>
		)
	}
}
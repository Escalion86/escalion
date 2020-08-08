import React, {Component} from 'react';
import logo from '../../img/logo-dev.png';

import './header.css';

export default class Header extends Component {
	render() {
		const {devName, devDesc} = this.props.content;
		const language = this.props.language;

		console.log(language);
		return (
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="general-title">
					{devName[language]}
				</h1>
				<h3 className="subtitle">
					{devDesc[language]}
				</h3>
				Page under construction
			</header>
		)
	}
}
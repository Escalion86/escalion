import React, {Component} from 'react';
import logo from '../../img/logo-dev.png';

import './title.css';

export default class Title extends Component {
	render() {
		const {devName, devDesc} = this.props.content;
		const language = this.props.language;

		return (
			<section className="App-title">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="general-title">
					{devName[language]}
				</h1>
				<h3 className="subtitle">
					{devDesc[language]}
				</h3>
				Page under construction
			</section>
		)
	}
}
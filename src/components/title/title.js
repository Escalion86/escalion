import React, {Component} from 'react';
import logo from '../../img/logo-dev.png';
import {Parallax} from "react-parallax";
import background from '../../img/cvbcvbvb.jpg';

import './title.css';

export default class Title extends Component {
	render() {
		const {devName, devDesc} = this.props.content;
		const language = this.props.language;

		return (
			<Parallax strength={300} bgImage={background} className="App-title">
				<div id="home" className="custom-bg">
				      {/* <div style={{ height: 700 }}><Background className="custom-bg"> */}
					{/* <img src={background} alt="fill murray" /> */}
				{/* </Background> */}
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="general-title">
						{devName[language]}
					</h1>
					<h3 className="subtitle">
						{devDesc[language]}
					</h3>
					Page under construction
					{/* </div> */}
					</div>
			</Parallax>
		)
	}
}
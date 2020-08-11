import React, {Component} from 'react';
import logoMini from '../../img/logo-dev-mini.png';
import LanguageToggle from '../languageToggle';

import './header.css';

export default class Header extends Component {
	
	render() {
		const {content, switchLanguage, language} = this.props;
		return (
			<>
			<header>
				<a href="http://escalion.ru" className="logo"><img src={logoMini} alt="logo" /></a>
				<ul>				
					<li><a href="#home">{content.home[language]}</a></li>
					<li><a href="#portfolio">{content.portfolio[language]}</a></li>
				</ul>
				<LanguageToggle 
					switchLanguage={switchLanguage}
					language={language} />
			</header>
			</>
		)
	}
}
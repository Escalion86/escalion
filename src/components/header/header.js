import React, {Component} from 'react';
import logoMini from '../../img/logo-dev-mini.png';
import LanguageToggle from '../languageToggle';
import { Link, animateScroll as scroll } from "react-scroll";

import './header.css';

export default class Header extends Component {
	
	render() {
		const {content, switchLanguage, language} = this.props;
		return (
			<>
			<header>
				<a href="http://escalion.ru" className="logo"><img src={logoMini} alt="logo" /></a>
				<ul>				
					<li><Link
							className="anchor"
							activeClass="active"
							to="home"
							spy={true}
							smooth={true}
							offset={-70}
							duration= {700} >
							{content.home[language]}
						</Link>
					</li>
					<li>
						<Link
							className="anchor"
							activeClass="active"
							to="portfolio"
							spy={true}
							smooth={true}
							offset={-70}
							duration= {700} >
							{content.portfolio[language]}
						</Link>
					</li>
				</ul>
				<LanguageToggle 
					switchLanguage={switchLanguage}
					language={language} />
			</header>
			</>
		)
	}
}
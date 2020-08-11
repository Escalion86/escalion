import React, {Component} from 'react';
import flagRus from '../../img/flag-rus.svg';
import flagUsa from '../../img/flag-usa.svg';

import './languageToggle.css';

export default class LanguageToggle extends Component {

	render() {
		const {switchLanguage, language} = this.props;
		return (
			<img 
				className="flag" 
				src={language === 'ru' ? flagUsa : flagRus} 
				alt="flag" 
				width="30px" 
				height="20px" 
				title="Switch language"
				onClick={() => switchLanguage()} />
		)
	}
}
import React, {Component} from 'react';
import flagRus from '../../img/flag-rus.svg';
import flagEng from '../../img/flag-eng.svg';

import './languageToggle.css';

export default class LanguageToggle extends Component {

	render() {
		const {switchLanguage, language} = this.props;
		return (
			<div className='flag'>
			<div className='flag-inner'>
				<div className='flag-front'>
					<img 
						className="flag-image" 
						src={language === 'en' ? flagEng : flagRus} 
						alt="flag" 
						width="30px" 
						height="20px" 
						title="Switch language"
						onClick={() => switchLanguage()} />
				</div>
				<div className='flag-back'>
					<img 
						className="flag-image" 
						src={language === 'ru' ? flagEng : flagRus} 
						alt="flag" 
						width="30px" 
						height="20px" 
						title="Switch language"
						onClick={() => switchLanguage()} />
				</div>
			</div>
			</div>
		)
	}
}
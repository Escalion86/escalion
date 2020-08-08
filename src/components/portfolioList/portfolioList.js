import React, {Component} from 'react';
import PortfolioItem from '../portfolioItem';

import './portfolioList.css';

export default class PortfolioList extends Component {
	items = [
		{
			name: 'Breaking Bad', 
			desc: 'Based on the movie Breaking Bad. For database API used https://www.breakingbadapi.com',
			screenshot: 'https://github.com/Escalion86/BreakingBad-Site/blob/master/screenshot.png?raw=true',
			use: ['React', 'Axios'],
			git: 'https://github.com/Escalion86/BreakingBad-Site',
			link: 'http://breaking-bad.escalion.ru'
		},
		{
			name: 'Game of Thrones', 
			desc: 'Based on the movie Game of Thrones. For database API used https://www.anapioficeandfire.com',
			screenshot: 'https://github.com/Escalion86/GameOfThrones/blob/master/screenshot.png?raw=true',
			use: ['React', 'Reactstrap'],
			git: 'https://github.com/Escalion86/GameOfThrones',
			link: 'http://got.escalion.ru'
		}
	]

	render() {
		return (
			<div className="container">
				<h2 className="title">Portfolio</h2>
				<section className="cards">
					{this.items.map((item) => {
							return <PortfolioItem item={item} key={item.git} />
						})
					}
				</section>
			</div>
		)
	}
}
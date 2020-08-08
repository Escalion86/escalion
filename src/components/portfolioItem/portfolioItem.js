import React, {Component} from 'react';

import './portfolioItem.css';

export default class PortfolioItem extends Component {
	render() {
		console.log(this.props);
		const {item} = this.props;

		return (
			<div className='card'>
			<div className='card-inner'>
			<div className='card-front'>
				<img className="screenshot" src={item.screenshot} alt='' />
			</div>
			<div className='card-back'>
				<h1>{item.name}</h1>
				<ul>
					<li>
						{item.desc}
					</li>
					<li>
					<strong>Used: </strong>{item.use.join(', ')}
					</li>
					{/* <li>
						<strong>Preview:</strong> <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a>
					</li> */}
					<li className="icons">
						<a href={item.git} target="_blank" rel="noopener noreferrer" title="GitHub">
							<i className="fab fa-git-square fa-2x"></i>
						</a>
						<a href={item.link} target="_blank" rel="noopener noreferrer" title="Site preview">
							<i className="fas fa-globe fa-2x"></i>
						</a>
					</li>
				</ul>
			</div>
			</div>
		</div>
		)
	}
}
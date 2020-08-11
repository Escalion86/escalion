import React, {Component} from 'react';
import Header from './components/header';
import PortfolioList from './components/portfolioList';


import './App.css';

export default class App extends Component {

  state = {
    language: 'ru'
  };

  content = {
    header: {
      devName: {
        en: 'Aleksei Belinskiy',
        ru: 'Алексей Белинский'
      },
      devDesc: {
        en: 'FullStack Web Developer',
        ru: 'FullStack Веб Разработчик'
      }
    },
    portfolio: {
      title: {
        en: 'Portfolio',
        ru: 'Портфолио'
      },
      used: {
        en: 'Libraries used',
        ru: 'Используемые библиотеки'
      }
    }
  };

  render () {
    return (
      <div className="App">
        <Header content={this.content.header} language={this.state.language} />
        <PortfolioList content={this.content.portfolio} language={this.state.language} />
      </div>
    );
  }
}
import React, {Component} from 'react';
import Header from './components/header';
import Title from './components/title';
import PortfolioList from './components/portfolioList';


import './App.css';

export default class App extends Component {

  state = {
    language: 'en'
  };

  content = {
    header: {
      home: {
        en: 'Home',
        ru: 'Главная'
      },
      portfolio: {
        en: 'Portfolio',
        ru: 'Портфолио'
      }
    },
    title: {
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

  componentDidMount() {
    this.checkUserCountry();
  }

  checkUserCountry = () => {
    fetch('https://ipinfo.io/json?token=b2775fc00c2c90')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
          this.setState({
            language: ['RU'].includes(json.country) ? 'ru' : 'en'
          })
      });
  }

  switchLanguage = () => {
    this.setState({
      language: this.state.language === 'ru' ? 'en' : 'ru'
    })
  }

  render () {
    return (
      <div className="App">
        <Header         
           switchLanguage={this.switchLanguage}
           content={this.content.header} 
           language={this.state.language} />
        <Title 
          content={this.content.title} 
          language={this.state.language} />
        <PortfolioList
          content={this.content.portfolio} 
          language={this.state.language} />
      </div>
    );
  }
}
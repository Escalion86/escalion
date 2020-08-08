import React, {Component} from 'react';
import Header from './components/header';
import PortfolioList from './components/portfolioList';


import './App.css';

export default class App extends Component {

  render () {
    return (
      <div className="App">
        <Header />
        <PortfolioList />
      </div>
    );
  }
}
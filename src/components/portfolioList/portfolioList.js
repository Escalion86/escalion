import React, { Component } from 'react'
import PortfolioItem from '../portfolioItem'

import './portfolioList.css'

export default class PortfolioList extends Component {
  items = [
    {
      name: {
        en: 'Breaking Bad',
        ru: 'Во все тяжкие',
      },
      desc: {
        en:
          'Based on the movie «Breaking Bad». For database API used https://www.breakingbadapi.com',
        ru:
          'По мотивам фильма «Во все тяжкие». В качестве источника данных используется API https://www.breakingbadapi.com',
      },
      screenshot:
        'https://github.com/Escalion86/BreakingBad-Site/blob/master/screenshot.png?raw=true',
      use: ['React', 'Axios'],
      git: 'https://github.com/Escalion86/BreakingBad-Site',
      link: 'http://breaking-bad.escalion.ru',
      status: 'Complite',
    },
    {
      name: {
        en: 'Game of Thrones',
        ru: 'Игра престолов',
      },
      desc: {
        en:
          'Based on the movie «Game of Thrones». For database API used https://www.anapioficeandfire.com',
        ru:
          'По мотивам фильма «Игра престолов». В качестве источника данных используется API https://www.anapioficeandfire.com',
      },
      screenshot:
        'https://github.com/Escalion86/GameOfThrones/blob/master/screenshot.png?raw=true',
      use: ['React', 'Redux', 'React-router', 'Reactstrap'],
      git: 'https://github.com/Escalion86/GameOfThrones',
      link: 'http://got.escalion.ru',
      status: 'In developing',
    },
    {
      name: {
        en: 'Fitnes Food',
        ru: 'Еда для фитнеса',
      },
      desc: {
        en:
          'Healthy eating fitness website template. Includes: tabs, feedback form, calculator, interactive gallery and timer',
        ru:
          'Шаблон сайта по фитнесу о здоровом питании. Включает в себя: табы, форму обратной связи, калькулятор, интерактивную галерею и таймер',
      },
      screenshot:
        'https://github.com/Escalion86/SiteFood/blob/master/screenshot.png?raw=true',
      use: ['Webpack', 'Json-server'],
      git: 'https://github.com/Escalion86/SiteFood',
      link: 'http://food.escalion.ru',
      status: 'Complite',
    },
    {
      name: {
        en: 'Picso',
        ru: 'Picso',
      },
      desc: {
        en:
          'Diploma project for the course "Java Script from zero" on https://SkillBox.ru. API https://unsplash.com is used as a data source',
        ru:
          'Дипломный проект по курсу "Java Script с нуля" на https://SkillBox.ru. В качестве источника данных используется API https://unsplash.com',
      },
      screenshot:
        'https://github.com/Escalion86/Unsplash/blob/master/screenshot.png?raw=true',
      use: ['React', 'Redux', 'React-router'],
      git: 'https://github.com/Escalion86/Unsplash',
      link: 'http://picso.escalion.ru',
      status: 'In developing',
    },
    {
      name: {
        en: 'LubProd',
        ru: 'ЛюбПрод',
      },
      desc: {
        en: 'Order a site for a ready layout from LubProd',
        ru: 'Заказ сайта по готовому макету от ЛюбПрод',
      },
      screenshot:
        'https://github.com/Escalion86/lubprod/blob/master/screenshot.png?raw=true',
      use: ['React', 'Tailwind CSS'],
      git: 'https://https://github.com/Escalion86/lubprod',
      link: 'http://lubprod.escalion.ru',
      status: 'In developing',
    },
  ]

  render() {
    const { title } = this.props.content
    const language = this.props.language
    return (
      <section id="portfolio" className="container">
        <h2 className="title">{title[language]}</h2>
        <div className="cards">
          {this.items.map((item) => {
            return (
              <PortfolioItem
                language={language}
                content={this.props.content}
                item={item}
                key={item.git}
              />
            )
          })}
        </div>
      </section>
    )
  }
}

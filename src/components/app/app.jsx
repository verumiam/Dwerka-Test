import { React, Component } from 'react';

import AppHeader from '../app-header/app-header';
import AppContent from '../app-content/app-content';
import AppFooter from '../app-footer/app-footer';

import './app.css';

import decorative1 from '../../img/decorative-accessories/decorative-1.png';
import decorative2 from '../../img/decorative-accessories/decorative-2.png';
import decorative3 from '../../img/decorative-accessories/decorative-3.png';
import decorative4 from '../../img/decorative-accessories/decorative-4.png';
import decorative5 from '../../img/decorative-accessories/decorative-5.png';
import decorative6 from '../../img/decorative-accessories/decorative-6.png';
import decorative7 from '../../img/decorative-accessories/decorative-7.png';
import decorative8 from '../../img/decorative-accessories/decorative-8.png';
import decorative9 from '../../img/decorative-accessories/decorative-9.png';
import decorative10 from '../../img/decorative-accessories/decorative-10.png';
import decorative11 from '../../img/decorative-accessories/decorative-11.png';
import decorative12 from '../../img/decorative-accessories/decorative-12.png';
import decorative13 from '../../img/decorative-accessories/decorative-13.png';
import decorative14 from '../../img/decorative-accessories/decorative-14.png';
import decorative15 from '../../img/decorative-accessories/decorative-15.png';
import decorative16 from '../../img/decorative-accessories/decorative-16.png';
import decorative17 from '../../img/decorative-accessories/decorative-17.png';
import decorative18 from '../../img/decorative-accessories/decorative-18.png';
import decorative19 from '../../img/decorative-accessories/decorative-19.png';
import decorative20 from '../../img/decorative-accessories/decorative-20.png';
import decorative21 from '../../img/decorative-accessories/decorative-21.png';
import decorative22 from '../../img/decorative-accessories/decorative-22.png';
import decorative23 from '../../img/decorative-accessories/decorative-23.png';
import decorative24 from '../../img/decorative-accessories/decorative-24.png';
import decorative25 from '../../img/decorative-accessories/decorative-25.png';
import decorative26 from '../../img/decorative-accessories/decorative-26.png';
import decorative27 from '../../img/decorative-accessories/decorative-27.png';
import decorative28 from '../../img/decorative-accessories/decorative-28.png';
import decorative29 from '../../img/decorative-accessories/decorative-29.png';
import decorative30 from '../../img/decorative-accessories/decorative-30.png';
import decorative31 from '../../img/decorative-accessories/decorative-31.png';
import decorative32 from '../../img/decorative-accessories/decorative-32.png';

import door1 from '../../img/doors/door-1.png';
import door2 from '../../img/doors/door-2.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [
          {name: '"Проверка поисковой системы"', type: 'фурнитура', img: decorative1, price: '25 500 р', discount: '21 900 р', id: 1},
          {name: '"Введите любое слово из этих"', type: 'фурнитура', img: decorative2, price: '10 500 р', discount: '21 900 р', id: 2},
          {name: '"Поиск ведётся по строкам"', type: 'фурнитура', img: decorative3, price: '15 500 р', discount: '21 900 р', id: 3},
          {name: '"Которые включены в название продукта"', type: 'фурнитура', img: decorative4, price: '30 500 р', discount: '21 900 р', id: 4},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative5, price: '15 500 р', discount: '21 900 р', id: 5},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative6, price: '15 500 р', discount: '21 900 р', id: 6},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative7, price: '15 500 р', discount: '21 900 р', id: 7},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative8, price: '15 500 р', discount: '21 900 р', id: 8},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative9, price: '15 500 р', discount: '21 900 р', id: 9},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative10, price: '15 500 р', discount: '21 900 р', id: 10},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative11, price: '15 500 р', discount: '21 900 р', id: 11},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative12, price: '15 500 р', discount: '21 900 р', id: 12},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative13, price: '15 500 р', discount: '21 900 р', id: 13},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative14, price: '20 500 р', discount: '21 900 р', id: 14},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative15, price: '15 500 р', discount: '21 900 р', id: 15},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative16, price: '15 500 р', discount: '21 900 р', id: 16},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative17, price: '15 500 р', discount: '21 900 р', id: 17},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative18, price: '15 500 р', discount: '21 900 р', id: 18},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative19, price: '10 500 р', discount: '21 900 р', id: 19},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative20, price: '15 500 р', discount: '21 900 р', id: 20},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative21, price: '15 500 р', discount: '21 900 р', id: 21},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative22, price: '15 500 р', discount: '21 900 р', id: 22},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative23, price: '15 500 р', discount: '21 900 р', id: 23},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative24, price: '15 500 р', discount: '21 900 р', id: 24},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative25, price: '15 500 р', discount: '21 900 р', id: 25},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative26, price: '15 500 р', discount: '21 900 р', id: 26},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative27, price: '15 500 р', discount: '21 900 р', id: 27},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative28, price: '15 500 р', discount: '21 900 р', id: 28},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative29, price: '15 500 р', discount: '21 900 р', id: 29},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative30, price: '15 500 р', discount: '21 900 р', id: 30},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative31, price: '15 500 р', discount: '21 900 р', id: 31},
          {name: '"Декоративная накладка"', type: 'фурнитура', img: decorative32, price: '15 500 р', discount: '21 900 р', id: 32},
      ],
      watched: [
          {name: '"Ллойд', type: 'дверь', img: door1, price: '16 610 р', id: 100},
          {name: '"Олива', type: 'дверь', img: door2, price: '39 850 р', id: 101},
      ],
      searchData: [
        {name: 'Скрытые двери'},
        {name: 'Раздвижные двери'},
        {name: 'Меджик'},
        {name: 'Глазки'},
        {name: 'Задвижки'},
        {name: 'Ключницы'},
        {name: 'Навесы'},
        {name: 'Входные двери'},
        {name: 'Деклоративные накладки'},
        {name: 'Межкомнатные двери'},
      ],
      term: '',
      fromPrice: '',
      toPrice: '',
      filter: ''
    }
  }

  changeTerm = (term) => {
    this.setState({term})
  }

  onUpdateFromPriceFilter = (fromPrice) => {
    this.setState({fromPrice});
  }

  onUpdateToPriceFilter = (toPrice) => {
    this.setState({toPrice});
  }

  onUpdateFilter = (filter) => {
    this.setState({filter});
  }

  PriceFilter = (fromPrice, toPrice, items) => {
    if (fromPrice && !toPrice) {
      return items.filter(item => item.price.replace(/\D/g, '') >= fromPrice)
    }

    if (toPrice && !fromPrice) {
      return items.filter(item => item.price.replace(/\D/g, '')  <= toPrice)
    }

    if (toPrice && fromPrice) {
      return items.filter(item => fromPrice <= item.price.replace(/\D/g, '') <= toPrice)
    }

    if (!toPrice && !fromPrice) {
      return items;
    }
  }

  bubbleSortToHigh = (arr) => {
    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i]
          arr[i] = arr[i +1]
          arr[i + 1] = temp
        }
      }
    }
  }

  bubbleSortToLow = (arr) => {
    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (arr[i] < arr[i + 1]) {
          let temp = arr[i]
          arr[i] = arr[i +1]
          arr[i + 1] = temp
        }
      }
    }
  }

  togglePriceFilter = (filter, items) => {
    switch(filter) {
      case 'high':
        return this.bubbleSortToHigh(items)
      default:
        return this.bubbleSortToLow(items)
    }
  }

  searchItems = (term, items) => {
    if (term.length === 0) {
      return items
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  render() {
    const {data, watched, searchData, term, fromPrice, toPrice, filter} = this.state;
    const visibleData = this.searchItems(term, data);
    const filterPriceData = this.PriceFilter(fromPrice, toPrice, data);
    const filtredData = this.togglePriceFilter(filter, filterPriceData);

    return (
      <div className="App">
        <AppHeader searchData={searchData} 
                  visibleData={visibleData} 
                  changeTerm={this.changeTerm}/>
        <AppContent data={filterPriceData} 
                    watched={watched}
                    onUpdateFromPriceFilter={this.onUpdateFromPriceFilter}
                    onUpdateToPriceFilter={this.onUpdateToPriceFilter}
                    onUpdateFilter={this.onUpdateFilter}/>
        <AppFooter/>  
      </div>
    );
  }
}

export default App;

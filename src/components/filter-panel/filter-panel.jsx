import { Component, Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './filter-panel.sass';

class FilterPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorsData: [
                {name: 'white', label: 'Белый', color: '#FFFFFF'},
                {name: 'light-grey', label: 'Светло-серый', color: '#AFAFAF'},
                {name: 'grey-umbra', label: 'Серая умбра', color: '#695853'},
                {name: 'umbra', label: 'Умбра', color: '#2F2F2F'},
                {name: 'dark-umbra', label: 'Тёмная умбра', color: '#1C1C1C'},
                {name: 'white-2', label: 'Белый', color: '#FFFFFF'},
                {name: 'light-grey-2', label: 'Светло-серый', color: '#AFAFAF'},
                {name: 'grey-umbra-2', label: 'Серая умбра', color: '#695853'},
                {name: 'umbra-2', label: 'Умбра', color: '#2F2F2F'},
                {name: 'dark-umbra-2', label: 'Тёмная умбра', color: '#1C1C1C'},
            ],
            fromPrice: '',
            toPrice: '',
        }
    }

    onUpdateFromPriceFilter = (e) => {
        const fromPrice = e.target.value;
        this.setState({fromPrice});
        this.props.onUpdateFromPriceFilter(fromPrice);
    }

    onUpdateToPriceFilter = (e) => {
        const toPrice = e.target.value;
        this.setState({toPrice});
        this.props.onUpdateToPriceFilter(toPrice);
    }

    render() {
        const {colorsData} = this.state;
        const colors = colorsData.map(({name, label, color}) => {

            return (
                <Fragment>
                    <div className="filter-color__block"
                        style={{backgroundColor: `${color}`}}
                        key={name}>
                        <input className='checkbox-color'
                        type="checkbox"
                        id={name}/>
                        <label htmlFor={name}></label>
                        <div className='filter-color__block-hint'>{label}</div>
                    </div>
                </Fragment>
            )
        })

        return (
            <aside className="filter">
                <div className="filter__title">Цена</div>
                <div className="filter-price">
                    <div className="input-left">
                        <span>От</span>
                        <input type="number" 
                                className="filter-price__input" 
                                name='from'
                                value={this.state.fromPrice}
                                onChange={this.onUpdateFromPriceFilter}/>
                    </div>
                    <div className="input-right">
                        <span>До</span>
                        <input type="number" 
                                className="filter-price__input" 
                                name='to'
                                value={this.state.toPrice}
                                onChange={this.onUpdateToPriceFilter}/>
                    </div>
                </div>
                <div className="filter__title">Цвет</div>
                <div className="filter-color">
                    {colors}
                    <button className="filter__btn-side"
                            type='button'>Показать всё
                    </button>
                </div>
                <div className="filter__title">Материал</div>
                <ul className="filter-material">
                    <li className="filter-material__block">
                        <input type="checkbox" id="eco-1" />
                        <label htmlFor="eco-1">Эко шпон</label>
                    </li>
                    <li className="filter-material__block">
                        <input type="checkbox" id="pvh-1" />
                        <label htmlFor="pvh-1">ПВХ</label>
                    </li>
                    <li className="filter-material__block">
                        <input type="checkbox" id="eco-2" />
                        <label htmlFor="eco-2">Эко шпон</label>
                    </li>
                    <li className="filter-material__block">
                        <input type="checkbox" id="pvh-2" />
                        <label htmlFor="pvh-2">ПВХ</label>
                    </li>
                    <li className="filter-material__block">
                        <input type="checkbox" id="eco-3" />
                        <label htmlFor="eco-3">Эко шпон</label>
                    </li>
                    <li className="filter-material__block">
                        <input type="checkbox" id="pvh-3" />
                        <label htmlFor="pvh-3">ПВХ</label>
                    </li>
                    <li className="filter-material__block">
                        <input type="checkbox" id="eco-4" />
                        <label htmlFor="eco-4">Эко шпон</label>
                    </li>
                    <button className="filter__btn-side"
                            type='button'>Показать всё
                    </button>
                </ul>
                <div className="filter__title">Размер</div>
                <ul className="filter-size">
                    <li className="filter-size__block">
                        <input type="checkbox" id="60" />
                        <label htmlFor="60">60</label>
                    </li>
                    <li className="filter-size__block">
                        <input type="checkbox" id="70" />
                        <label htmlFor="70">70</label>
                    </li>
                    <li className="filter-size__block">
                        <input type="checkbox" id="80" />
                        <label htmlFor="80">80</label>
                    </li>
                    <li className="filter-size__block">
                        <input type="checkbox" id="90" />
                        <label htmlFor="90">90</label>
                    </li>
                    <button className="filter__btn-side"
                            type='button'>Показать всё
                    </button>
                </ul>
            </aside>
        )
    }
}

export default FilterPanel;
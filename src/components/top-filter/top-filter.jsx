import { Component } from 'react';

import './top-filter.sass';

import arrowUp from '../../img/arrow-up.svg';

class TopFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtersData: [
                {name: 'popular', label: 'Популярности',  filter: 'high', id: 1},
                {name: 'price', label: 'Цене', filter: 'high', id: 2},
                {name: 'rating', label: 'Рейтингу',  filter: 'high', id: 3},
                {name: 'update', label: 'Обновлению',  filter: 'high', id: 4},
                {name: 'discount', label: 'Скидке',  filter: 'high', id: 5},
            ],
            filter: 'high'
        }
    }

    onToggleFilter = (btn, filter) => {
        if (filter === 'high') {
            btn.setAttribute('data-toggle', 'low')
            const filter = 'low'
            this.setState({filter});
            this.props.onUpdateFilter(filter);
        }

        if (filter === 'low') {
            btn.setAttribute('data-toggle', 'high')
            const filter = 'high'
            this.setState({filter});
            this.props.onUpdateFilter(filter);
        }
    }

    render() {
        const {filtersData} = this.state;

        const filters = filtersData.map(({name, label, filter, id}) => {
            const active = filter === this.state.filter;
            const clazz = active ? 'filter__btn-active' : '';
    
            return (
                <button className={`filter__btn ${clazz}`}
                        type='button'
                        key={id}
                        data-toggle={filter}
                        onClick={(e) => this.onToggleFilter(e.currentTarget, e.currentTarget.getAttribute('data-toggle'))}>
                            {label} 
                        <img src={arrowUp} alt="" className="filter__btn-img" />
                </button>
            )
        })

        return (
            <div className="top-filter">
                <span>Сортировать по</span>
                {filters}
            </div>
        )
    }
}

export default TopFilter;
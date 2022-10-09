import './content-pagination.sass';

import arrowRight from '../../img/arrow-right.svg';

const ContentPagination = () => {

    const paginationBtns = [
        {number: 1, check: 'true'},
        {number: 2, check: 'false'},
        {number: 3, check: 'false'},
        {number: 4, check: 'false'},
        {number: 5, check: 'false'},
        {number: '...'},
    ]

    const btn = paginationBtns.map(({number, check}) => {
        const active = check === 'true';
        const clazz = active ? 'pagination__btn-active' : '';

        return (
            <button className={`pagination__btn ${clazz}`}
                    type='button'
                    data-pagination={active}
                    key={number}>
                {number}
            </button>
        )
    });

    return (
    <div className="pagination">
        {btn}
        <button className="pagination-next"
                type="button">
            Следующая страница
            <span>
            <img src={arrowRight} 
                alt="arrow-right" 
                className="pagination__arrow" />
            </span>
        </button>
    </div>
    )
}

export default ContentPagination;
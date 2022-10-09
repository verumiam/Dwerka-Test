import { Row, Col} from 'react-bootstrap';

import ContentWatchedItem from '../content-watched-item/content-watched-item';

import './content-watched.sass';

const ContentWatched = ({watched}) => {

    const watchItem = watched.map(item => {
        const {id, ...itemProps} = item;

        return (
            <Col xxl={2} lg={3} md={4} sm={5} xs={12}>
                <ContentWatchedItem 
                    key={id}
                    {...itemProps}/>
            </Col>
        )
    })

    return (
        <section className="watched">
            <div className="watched__title">
                <span>Вы смотрели</span>
                <button className="watched__btn"
                        type='button'>
                        Смотреть все
                </button>
            </div>
            <Row>
                {watchItem}
            </Row>
        </section>
    )
}

export default ContentWatched;
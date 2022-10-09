import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app-content.sass';

import arrow from '../../img/arrow.svg';

import SearchResponse from '../search-response/search-response';
import FilterPanel from '../filter-panel/filter-panel';
import TopFilter from '../top-filter/top-filter';
import ContentList from '../content-list/content-list';
import ContentWatched from '../content-watched/content-watched';

const AppContent = ({data, watched, onUpdateFromPriceFilter, onUpdateToPriceFilter, onUpdateFilter}) => {
    
    return (
        <section className="content">
            <span className="content__border-top"/>
            <Container>
                <span>
                    <img src={arrow} 
                            alt="arrow-prev" 
                            className="content__arrow" />
                </span>
                <SearchResponse/>
                <Row>
                    <Col md={3} sm={12}>
                        <FilterPanel onUpdateFromPriceFilter={onUpdateFromPriceFilter}
                                    onUpdateToPriceFilter={onUpdateToPriceFilter}/>
                    </Col>
                    <Col md={9}>
                        <Row>
                            <Col md={12}>
                                <TopFilter onUpdateFilter={onUpdateFilter}/>
                            </Col>
                        </Row>
                        <Row style={{display: 'flex', flexWrap: 'wrap'}}>
                            <Col xxl={12} lg={12} md={12}>
                                <ContentList data={data}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xxl={12} lg={12} md={10}>
                        <ContentWatched watched={watched}/>
                    </Col>
                </Row>
            </Container>
            <span className="content__border-bottom"/>
        </section>
    )
}

export default AppContent;
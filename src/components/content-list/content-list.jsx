import { Col, Row} from "react-bootstrap";

import ContentListItem from "../content-list-item/content-list-item";
import ContentPagination from "../content-pagination/content-pagination";

import './content-list.sass';
import arrowDown from '../../img/arrow-down.svg';

const ContentList = ({data}) => {

    const furnitures = data.map(furniture => {
        const {id, ...furnitreProps} = furniture;

        return (
            <Col xxl={3} lg={4} md={6} xs={12}>
                <ContentListItem 
                    key={id}
                    {...furnitreProps}/>
            </Col>
        )
    })

    return (
        <div className="content__list">
            <Row>
                {furnitures}
            </Row>
            <button className="content__list-btn"
                    type="button">
                        Показать ещё
                        <img src={arrowDown} alt="" className="content__list-btn_img" />
            </button>
            <Row>
                <Col md={12}>
                    <ContentPagination/>
                </Col>
            </Row>
        </div>
    )
}

export default ContentList;
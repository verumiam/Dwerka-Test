import './content-list-item.sass';

const ContentListItem = ({name, type, img, price, discount}) => {
    return (
        <div className="content__list-item">
            <img src={img} 
                alt='decorative-furniture' 
                className="content__list-item_img"/>
            <div className="content__list-item_descr">
                <div className="content__list-item_price">
                    {price} 
                    <span  className="content__list-item_discount"> {discount}</span>
                </div>
                <div className="content__list-item_name">{name} / <br /> {type}</div>
            </div>
        </div>
    )
}

export default ContentListItem;
import './content-watched-item.sass';

const ContentWatchedItem = ({img, price, name, type}) => {
    return (
        <div className="content__watched-item">
            <img src={img} 
                alt='door' 
                className="content__watched_img"/>
            <div className="content__watched_descr">
                <div className="content__watched_price">
                    {price} 
                </div>
                <div className="content__watched_name">{name} / {type}</div>
            </div>
        </div>
    )
}

export default ContentWatchedItem;
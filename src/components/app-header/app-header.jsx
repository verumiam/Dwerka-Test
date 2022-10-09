import { Container, Row, Col } from 'react-bootstrap';
import { useState,  useRef } from "react"

import './app-header.sass';

import 'bootstrap/dist/css/bootstrap.min.css';

import msgIMG from '../../img/help-msg.svg';
import countryMarker from '../../img/country-marker.svg';
import logo from '../../img/logo-header.svg';
import marker from '../../img/marker.svg';
import user from '../../img/user.svg';
import purchase from '../../img/purchase.svg';
import search from '../../img/search.svg';

const AppHeader = ({searchData, visibleData, changeTerm}) => {

    const [check, setCheck] = useState('');
    const [click, setClick] = useState(false)

    const onUpdateSearch = (e) => {
        const term = e.target.value
        setCheck(term)
        setClick(true)
        changeTerm(term)
    }

    const itemsHistory = searchData.map(item => {
        return (
            <span>
                <img src={search} alt="search" className="header__input-img" />{item.name}  
            </span>
        )
    })

    const items = visibleData.map(item => {
        return (
            <span>
                {item.name}  
            </span>
        )
    })

    const inputRef = useRef(0);
    const [widthSearch, setWidth] = useState(0);

    const checkWidthInput = () => {
        setClick(true)
        inputRef.current.focus()
        
        setWidth(inputRef.current.offsetWidth)
    }

    return (
        <header className="header">
            <div className="header__inner">
                <Container>
                    <Row className="header__inner-first">
                        <Col lg={1} md={2} sm={6} xs={12}>
                            <div className="header__region">
                                <img src={countryMarker} 
                                    className="header__region-img"
                                    alt="marker"/>
                                <div className="header__region-name">Россия</div>
                            </div>
                        </Col>
                        <Col lg={2} md={2} sm={6} xs={12}>
                            <span className="header__offer">Бесплатная доставка</span>
                        </Col>
                        <Col lg={2} md={4} sm={6} xs={12}>
                            <button className="header__promo">Продавайте на Dwerka.ru</button>
                        </Col>
                        <Col lg={{ span: 2, offset: 5 }} md={{span: 3, offset: 1}} sm={6} xs={12}>
                            <div className="header__help">
                                <button className="header__help-btn"
                                        type="button">Сообщить о проблеме 
                                    <img src={msgIMG} 
                                        alt="msg-help" 
                                        className="header__help-img" />
                                </button>
                            </div>
                        </Col>
                    </Row>
                    <Row className="header__inner-second">
                        <Col md={1}>
                            <button className="header__burger"
                                    type='button'>
                                <span className='header__burger-line'>1</span>
                                <span className='header__burger-line'>2</span>
                                <span className='header__burger-line'>3</span>
                            </button>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="header__logo">
                                <img src={logo} 
                                    alt="logo-dverka" 
                                    className="header__logo-img" />
                            </div>
                        </Col>
                        <Col lg={5} md={12}>
                            <div className="input-div">
                                <input type="text" 
                                    className="header__input" 
                                    placeholder='Я ищу...'
                                    onChange={onUpdateSearch}
                                    onClick={() => checkWidthInput()}
                                    onBlur={() => setClick(false)}
                                    ref={inputRef}/>
                                 <div className={click ? 'header__input-modal' : 'header__input-none'}
                                        style={{width: `${widthSearch}px`}}>
                                    <button className="header__input-btn">Очистить историю</button>
                                    {check ? items : itemsHistory}
                                 </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="header__wrapper">
                                <div>
                                    <button className="header__location"
                                            type='button'>
                                        <img src={marker} 
                                            alt="marker" 
                                            className="header__location-img" />
                                    </button>
                                    <div className="header__location-title">Адреса</div>
                                </div>
                                <div>
                                    <button className="header__profile"
                                            type='button'>
                                        <img src={user} 
                                            alt="user-profile" 
                                            className="header__profile-img" />
                                    </button>
                                    <div className="header__profile-title">Профиль</div>
                                </div>
                                <div>
                                    <button className="header__purchase"
                                            type='button'>
                                        <img src={purchase} 
                                            alt="purchase" 
                                            className="header__purchase-img" />
                                        <span className="header__purchase-counter">3</span>
                                    </button>
                                    <div className="header__purchase-title">Корзина</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    )
}

export default AppHeader;


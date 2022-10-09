import { Container, Row, Col } from 'react-bootstrap';

import './app-footer.sass';

import masterCard from '../../img/footer/mastercard.svg';
import mir from '../../img/footer/mir.svg';
import visa from '../../img/footer/visa.svg';

const AppFooter = () => {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <Container>
                    <Row>
                        <Col lg={3} md={6}>
                            <h5 className="footer__title">Покупателям</h5>
                            <ul className="footer__list">
                                <li className="footer__list-link"><a href="https://dwerka.ru/">Как сделать заказ</a></li>
                                <li className="footer__list-link"><a href="https://dwerka.ru/">Способы оплаты</a></li>
                                <li className="footer__list-link"><a href="https://dwerka.ru/">Доставка</a></li>
                                <li className="footer__list-link"><a href="https://dwerka.ru/">Возврат товара</a></li>
                                <li className="footer__list-link"><a href="https://dwerka.ru/">Правила пользования торговой площадкой</a></li>
                                <li className="footer__list-link"><a href="https://dwerka.ru/">Новости</a></li>
                                <li className="footer__list-link"><a href="https://dwerka.ru/">Вопросы и ответы</a></li>
                            </ul>
                        </Col>
                        <Col lg={2} md={6}>
                            <h5 className="footer__title">Партнёрам</h5>
                            <ul className="footer__list">
                                <li className="footer__list-link"><a href="https://dwerka.ru/">Продавайте на Dwerka.ru</a></li>
                                <li className="footer__list-link"><a href="https://dwerka.ru/">Перевозчикам</a></li>
                            </ul>
                        </Col>
                        <Col lg={{ span: 3, offset: 1 }} md={6}>
                            <h5 className="footer__title">Компания</h5>
                            <ul className="footer__list">
                                <li className="footer__list-link"><a href="https://dwerka.ru/">О нас</a></li>
                                <li className="footer__list-link"><a href="https://dwerka.ru/">Контакты</a></li>
                                <li className="footer__list-link"><a href="https://dwerka.ru/">Публичная оферта</a></li>
                                <li className="footer__list-link"><a href="https://dwerka.ru/">Политика конфиденциальности</a></li>
                            </ul>
                        </Col>
                        <Col lg={2} md={4}>
                            <h5 className="footer__title">Мы в соцсетях</h5>
                            <ul className="footer__list">
                                <li className="footer__list-link"><a href="https://dwerka.ru/">info@dwerka.ru</a></li>
                                <li className="footer__list-link"><a href="https://dwerka.ru/">Dwerka2020@mail.ru</a></li>
                            </ul>
                        </Col>
                        <Col lg={1} md={1}>
                            <ul className="footer__list img">
                                <li className="footer__list-img"><img src={masterCard} alt="mastercard" /></li>
                                <li className="footer__list-img"><img src={visa} alt="visa" /></li>
                                <li className="footer__list-img"><img src={mir} alt="mir" /></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}

export default AppFooter;
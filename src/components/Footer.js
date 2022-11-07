import { Link } from "react-router-dom";

function Footer () {
    return (
        <section>
            <footer>
                <div className="container">
                    <div className="footer_column">
                        <h3 className="footer_header">Покупателям</h3>
                        <nav className="footer_nav">
                            <Link to="/payment" className="footer_link"> Способы оплаты </Link>
                            <Link to="/delivery" className="footer_link"> Доставка заказов </Link>
                            <Link to="/refund" className="footer_link"> Обмен и возврат </Link>
                        </nav>
                    </div>
                    <div className="footer_column">
                        <h3 className="footer_header">Контакты</h3>
                        <nav className="footer_nav">
                            <a href="tel:+73430000000" className="footer_link">
                                <img src="./img/icon/contacts/telephone.png" alt="Minimalisté logo" className="header_logo" /> +7 343 000 00 00 
                            </a>
                            <a href="tel:+79000000000" className="footer_link">
                                <img src="./img/icon/contacts/mobile-phone.png" alt="Minimalisté logo" className="header_logo" /> +7 900 000 00 00 
                            </a>
                            <a href="mailto:minimalistebijou@mail.ru" className="footer_link">
                                <img src="./img/icon/contacts/email.png" alt="Корзина" className="header_img" /> minimalistebijou@mail.ru 
                            </a>
                        </nav>
                    </div>
                </div>
                <div className="remaining">
                    Все материалы использованы в учебных целях
                </div>
            </footer>
        </section>
)};

export default Footer;
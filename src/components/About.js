import { Link } from "react-router-dom";
import SubNavigation from "./SubNavigation";

function About () {
    return (
        <div>
            <SubNavigation componentName="/about" componentHeader="О компании" />
            <section className="about">
                <div className="container">
                    <h1 className="about_header">О Minimalisté</h1>
                    <div className="about_info">
                        <div className="about_descr">
                            <h2 className="about_title">История</h2>
                            <p>Более 10 лет наши дизайнеры воплощают в реальность свои самые смелые и интересные идеи для Ваших образов.</p>
                            <p>Наша миссия - создание качественных и стильных изделий вне времени.</p>
                            <blockquote className="about_blockquote">
                                <p>Когда вы смотрите на украшение, вы видите лишь камни, золото, огранку и шлифовку. Ювелир видит целую историю.</p>
                                <cite>Джованни Лоренцо Бернини</cite>
                            </blockquote>
                            <h2 className="about_title">Наши преимущества</h2>
                            <ul className="about_list">
                                <li>Только качественные гипоаллергенные материалы</li>
                                <li>Уникальный дизайн и изысканный стиль</li>
                                <li>Оригинальная продукция в подарочной упаковке</li>
                                <li>Гарантийный сертификат производителя</li>
                            </ul>
                            <Link to="/catalog" className="promo_catalog"> Открыть каталог </Link>
                        </div>
                        <div className="about_image">
                            <img src="img/bg/about_1.webp" alt="payment" />
                        </div>
                    </div>

                    <div className="place">
                        <div className="place_map">
                            <iframe title="Minimalisté address" frameBorder="0" style={{ width: "100%", height: "400"}} 
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3A3e1d47547d8d181f788b06ad5e8db5d4bee05afa9d5c78120fb1f8792e3fcdad&amp;source=constructor">
                            </iframe>
                        </div>
                        <div className="place_info">
                            <div className="place_image">
                                <img src="img/bg/about_2.webp" alt="payment" />
                            </div>
                            <div className="place_descr">
                                <h2 className="about_title">Адрес магазина</h2>
                                <address>
                                    Свердловская область <br />
                                    г. Екатеринбург <br />
                                    ул. 8 Марта, 291 <br />
                                    Ежедневно 10:00-22:00   
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
)};

export default About;
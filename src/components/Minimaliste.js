import { useState } from 'react';
import { Link } from "react-router-dom";
import Filter from "./Filter";
import List from './List';
import { newCollection } from '../data/newCollection';


function Minimaliste () {
    const description = `Спешим поделиться коллекцией бижутерии Rosée. Стилисты вдохнули в натуральный камень новую жизнь, заключив его в тонкие изящные линии. 
    Все украшения покрывают серебром 925 пробы, вручную наносят эмаль, используют стразы Swarovski. Здесь нет места пластику и штамповкам, все изысканно и продумано до мелочей.
    Лаконичный дизайн украшений поможет дополнить любой повседневный образ.`;
    const [showMore, setShowMore] = useState(false);
    const showTextClick = () => {
        console.log('hello');
        setShowMore(!showMore);
    };

    return (
        <div>
            <Filter filteredCatalog={null}/>
            <section className="promo">
                <div className="promo_image">
                </div>
                <div className="container">
                    <h2 className="promo_header"> Наши преимущества </h2>
                    <div id="promo_reasons" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#promo_reasons" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#promo_reasons" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#promo_reasons" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#promo_reasons" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active"  data-bs-interval="5000">
                                <p className="carousel-caption"> Только качественные гипоаллергенные материалы </p>
                            </div>
                            <div className="carousel-item"  data-bs-interval="4000">
                                <p className="carousel-caption"> Уникальный дизайн и изысканный стиль </p>
                            </div>
                            <div className="carousel-item"  data-bs-interval="4000">
                                <p className="carousel-caption"> Оригинальная продукция в подарочной упаковке </p>
                            </div>
                            <div className="carousel-item"  data-bs-interval="4000">
                                <p className="carousel-caption"> Гарантийный сертификат производителя </p>
                            </div>
                        </div>
                    </div>
                    <Link to="/catalog" className="promo_catalog"> Открыть каталог </Link>
                </div>
            </section>

            <section className="catalog">
                <h1 className="catalog_header"><span>Новая коллекция</span></h1>
                <div className="container">
                    <p className="catalog_descr"> {showMore ? description: description.substring(0, 234) + '...'}
                        <button className="showTextClick_btn" onClick={() => showTextClick()}>{showMore ? "Скрыть описание" : "Развернуть описание"}</button>
                    </p>
                </div>
                <List itemForSale = {newCollection} />
            </section>

        </div>
    )
}

export default Minimaliste;
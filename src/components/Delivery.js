import SubNavigation from "./SubNavigation";

function Delivery () {
    return (
        <div>
            <SubNavigation componentName="/delivery" componentHeader="Условия доставки" />
            <section className="payment">
                <div className="container">
                    <h1 className="payment_header">Условия доставки</h1>
                    <div className="payment_info">
                        <div className="payment_image">
                            <img src="img/bg/bg_descr.webp" alt="delivery" />
                        </div>
                        <div className="payment_descr">
                            <p>Мы осуществляем доставку заказов по всей России. Гарантия 100% замены товара или возврат денег в случае недоставки.</p>
                            <div className="payment_process">
                                <h2 className="payment_subheader">Самовывоз</h2>
                                <ul className="payment_list">
                                    <li className="payment_item"> Забрать свой заказ, посмотреть ассортимент и совершить покупку вы можете по адресу: г. Екатеринбург, ул. 8 Марта, 291 ежедневно с 10-00ч. до 22-00ч. </li>
                                </ul>
                            </div>
                            <div className="payment_process">
                                <h2 className="payment_subheader">Доставка по Екатеринбургу</h2>
                                <p>Доставка производится в будние дни с 10 до 18 часов.</p>
                                <ul className="payment_list">
                                    <li className="payment_item"> Доставка осуществляется нашими курьерами до подъезда или до квартиры в предварительно согласованный промежуток времени.</li>
                                    <li className="payment_item"> Стоимость доставки рассчитывается в зависимости от суммы заказа и зоны доставки.</li>
                                </ul>
                            </div>
                            <div className="payment_process">
                                <h2 className="payment_subheader">Отправка в другие города</h2>
                                <p>Точная стоимость доставки рассчитается автоматически в корзине при оформлении заказа и зависит от Вашего региона.</p>
                                <ul className="payment_list">
                                    <li className="payment_item"> Почтой России.</li>
                                    <li className="payment_item"> ТК СДЭК.</li>
                                    <li className="payment_item"> Boxberry.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      </div>
)};

export default Delivery;